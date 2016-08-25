var mapnik = require('mapnik');
var fs = require('fs');
var sm = require('sphericalmercator');

mapnik.Logger.setSeverity(mapnik.Logger.DEBUG);

// register fonts and datasource plugins
mapnik.register_default_fonts();
mapnik.register_default_input_plugins();

var merc = new sm({
  size: 256
});

var list = [
  [7, 101, 52], // 112931
  [8, 212, 106], // 18926
  [9, 413, 214], // 6956
  [10, 854, 417], // 1754
  [11, 1717, 838] // 9
];
var choose = 1;
console.log(list[choose]);
var bbox_ll = merc.bbox(list[choose][1], list[choose][2], list[choose][0]);
var bbox_mc = merc.bbox(list[choose][1], list[choose][2], list[choose][0], false, '900913');
console.log(bbox_ll);

var ds = new mapnik.Datasource({
  type: 'postgis',
  host: '192.168.1.103',
  dbname: 'chinamap',
  extent: bbox_ll,
  user: 'sde',
  password: 'sde',
  table: 'country_point',
  geometry_field: 'geom'
});
var featureset = ds.featureset();
var feature = featureset.next();
var count = 0;
while (feature) {
  count++;
  feature = featureset.next();
};
console.log('count: ', count);

var t1 = Date.now();
var map = new mapnik.Map(256, 256);
map.loadSync('./stylesheet.xml');
map.zoomToBox(bbox_mc);
map.renderFileSync('out.png');
var t2 = Date.now();
console.log(t2 - t1);
