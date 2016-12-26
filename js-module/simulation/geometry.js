import Class from './class'
import GeoJSON from './geojson'

export const Geometry = Class.extend({
  statics: {
    POINT: 'Point',
    LINESTRING: 'LineString',
    POLYGON: 'Polygon',
    MULTIPOINT: 'MultiPoint',
    MULTILINESTRING: 'MultiLineString',
    MULTIPOLYGON: 'MultiPolygon',
    GEOMETRYCOLLECTION: 'GeometryCollection'
  },

  initialize: function () {
    console.log('geometry')
  }
})

Geometry.fromJSON = function (json) {
  return GeoJSON.toGeometry(json)
}

export default Geometry
