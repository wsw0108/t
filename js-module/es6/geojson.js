import Marker from './marker'

export const GeoJSON = {
  toGeometry: function (json) {
    return new Marker()
  }
}

export default GeoJSON
