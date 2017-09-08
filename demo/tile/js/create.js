var urlTemplate = 'http://webrd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}';
var subdomains = ['01','02','03','04'];
var attribution = '&copy; <a href="http://www.gaode.com/">Gaode.com</a>';
function createMap(container, params) {
  var baseLayer = new maptalks.TileLayer('base', {
    urlTemplate: params.urlTemplate || urlTemplate,
    subdomains: params.subdomains || subdomains,
    tileSize: [params.tileSize, params.tileSize]
  });
  var options = {
    center: [121, 31],
    zoom: 13,
    baseLayer: baseLayer,
    attribution: {
      content: params.attribution || attribution
    }
  }
  if (params.srs) {
    options.spatialReference = params.srs;
  }
  var map = new maptalks.Map(container, options);
  return map;
}
