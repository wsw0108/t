import GeoJSON from './geojson'
import Marker from './marker'
import Curve from './curve'

// const marker = new Marker()
// console.log(marker)

const curve = new Curve()
console.log(curve)

const geojson = GeoJSON.toGeometry('')
if (geojson instanceof Marker) {
  console.log('is a marker')
}
console.log(geojson)
