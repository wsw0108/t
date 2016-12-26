import GeoJSON from './geojson'

export class Geometry {
  constructor () {
    console.log('geometry')
  }
}

Geometry.fromJSON = function (json) {
  return GeoJSON.toGeometry(json)
}

export default Geometry
