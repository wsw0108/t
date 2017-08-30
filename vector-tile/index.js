const geojsonvt = require('geojson-vt')
const protobuf = require('protobufjs')
const is = require('is-type-of')

const data = require('./us-states.json')
const options = { debug: 1 }
const index = geojsonvt(data, options)
const [z, x, y] = [7, 37, 48]
const tile = index.getTile(z, x, y)
console.log(`features for [${z}, ${x}, ${y}]:`)
console.log(tile.features)

protobuf.load('./vector_tile.proto').then(root => {
  const Tile = root.lookupType('vector_tile.Tile')
  // console.log(Tile.Layer)
  // console.log(Tile.Feature)

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
          bool_value: val
        }
      } else if (is.int(val)) {
        value = {
          int_value: val
        }
      } else if (is.double(val)) {
        value = {
          double_value: val
        }
      } else {
        // default to string
        value = {
          string_value: val
        }
      }
      if (v2idx[val] === undefined) {
        v2idx[val] = values.length
        values.push(value)
      }

      feature.tags.push(k2idx[key], v2idx[val])
    })

    // TODO: encode geometry

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
  console.log(buffer)
})
