function bbox(x, y, z, bufSize, map, tileSize) {
  var srs = map.getSpatialReference();
  var proj = srs.getProjection();
  var ts = maptalks.TileSystem.getDefault(proj);
  var full = srs.getFullExtent();
  var tc = new maptalks.TileConfig(ts, full, new maptalks.Size(tileSize, tileSize));
  var res = srs.getResolution(z);
  var extent = tc.getTilePrjExtent(x, y, res);
  bufSize = bufSize || 0;
  var distance = bufSize * res;
  extent._expand(distance);
  var sw = proj.unproject(extent.getMin());
  var ne = proj.unproject(extent.getMax());
  console.log(`bbox, z: ${z}, x: ${x}, y: ${y}`);
  console.log(sw);
  console.log(ne);
}
