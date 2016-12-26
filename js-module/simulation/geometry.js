import Class from './class'
import GeoJSON from './geojson'

export const Geometry = Class.extend({
  initialize: function () {
    console.log('geometry')
  }
})

Geometry.fromJSON = function (json) {
  return GeoJSON.toGeometry(json)
}

export default Geometry
