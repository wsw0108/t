import Class from './class'
import GeoJSON from './geojson'

export class Geometry extends Class {
  constructor () {
    super()
    console.log('geometry')
  }
}

Geometry.fromJSON = function (json) {
  return GeoJSON.toGeometry(json)
}

export default Geometry
