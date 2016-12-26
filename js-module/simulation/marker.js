import Geometry from './geometry'

export const Marker = Geometry.extend({
  type: Geometry.POINT,

  initialize: function () {
    console.log('marker')
  }
})

export default Marker
