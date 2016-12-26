import LineString from './linestring'

export const Curve = LineString.extend({
  initialize: function () {
    console.log('curve')
  }
})

export default Curve
