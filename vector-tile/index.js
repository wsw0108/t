const geojsonvt = require('geojson-vt')
const VectorTile = require('@mapbox/vector-tile').VectorTile
const Pbf = require('pbf')
const is = require('is-type-of')
const GeoJSONEquality = require('geojson-equality')
const eq = new GeoJSONEquality({ precision: 1 })

const data = require('./us-states.json')
const options = { debug: 1 }
const index = geojsonvt(data, options)
const [z, x, y] = [7, 37, 48]
const tile = index.getTile(z, x, y)
console.log(`features for [${z}, ${x}, ${y}]:`)
console.log(tile.features)

function command (cmd, length) {
  return (length << 3) + (cmd & 0x7)
}

function zigzag (num) {
  return (num << 1) ^ (num >> 31)
}

const root = require('./tile')
const Tile = root.vector_tile.Tile

const features = []
const keys = []
const values = []
const k2idx = {}
const v2idx = {}

tile.features.forEach(f => {
  const feature = {
    id: f.id,
    tags: [],
    type: f.type,
    geometry: []
  }

  Object.keys(f.tags).forEach(key => {
    if (k2idx[key] === undefined) {
      k2idx[key] = keys.length
      keys.push(key)
    }

    const val = f.tags[key]
    let value
    if (is.boolean(val)) {
      value = {
        boolValue: val
      }
    } else if (is.int(val)) {
      value = {
        intValue: val
      }
    } else if (is.double(val)) {
      value = {
        doubleValue: val
      }
    } else {
      // default to string
      value = {
        stringValue: val
      }
    }
    if (v2idx[val] === undefined) {
      v2idx[val] = values.length
      values.push(value)
    }

    feature.tags.push(k2idx[key], v2idx[val])
  })

  let geometry
  if (f.type === 1) {
    geometry = [f.geometry]
  } else {
    geometry = f.geometry
  }
  let x = 0
  let y = 0
  const rings = geometry.length
  for (let r = 0; r < rings; r++) {
    const ring = geometry[r]
    const count = (f.type === 1) ? ring.length : 1
    feature.geometry.push(command(1, count))
    for (let i = 0; i < ring.length; i++) {
      if (i === 1 && f.type !== 1) {
        feature.geometry.push(command(2, ring.length - 1))
      }
      const dx = ring[i][0] - x
      const dy = ring[i][1] - y
      feature.geometry.push(zigzag(dx))
      feature.geometry.push(zigzag(dy))
      x += dx
      y += dy
    }
  }

  console.log('feature: ')
  console.log(feature)
  features.push(feature)
})

const layer = {
  version: 2,
  name: 'us-states',
  features: features,
  keys: keys,
  values: values,
  extent: 4096
}
const payload = { layers: [layer] }
const message = Tile.create(payload)
const buffer = Tile.encode(message).finish()

const tile2 = new VectorTile(new Pbf(buffer))
const layer2 = tile2.layers['us-states']
const features2 = []
for (let i = 0; i < layer2.length; i++) {
  const f = layer2.feature(i).toGeoJSON(x, y, z)
  features2.push(f)
}
features2.forEach(actual => {
  const expected = data.features.find(f => +f.id === actual.id)
  console.log(actual.geometry.coordinates)
  console.log(expected.geometry.coordinates)
  const result = eq.compare(actual, expected)
  console.log(result)
})
