import Geometry from './geometry'
import Vector from './vector'

export const LineString = Vector.extend({
  type: Geometry.LINESTRING,

  initialize: function () {
    console.log('linestring')
  }
})

export default LineString
