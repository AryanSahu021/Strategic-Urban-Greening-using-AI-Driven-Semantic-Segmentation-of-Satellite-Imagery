var dataset = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.date('2021-01-01', '2022-10-31'));
var trueColor = dataset.select(['R', 'G', 'B','N']);
var trueColorVis = {
  min: 0,
  max: 255,
};

// Define the area of interest as a rectangle (replace coordinates with your area of interest)
var geometry = ee.Geometry.Rectangle([ -111.97166062364953,33.37949443963484, -111.73160638788757,33.4700810862517]);

// Set map center and add the true color layer
Map.setCenter(-110.984992,32.134894);
Map.addLayer(trueColor, trueColorVis, 'True Color');

// Reduce the collection to a single image by median
var imageToExport = trueColor.median();

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: imageToExport,
  description: 'Final',
  scale: 1,
  region: geometry,
  fileFormat: 'GeoTIFF',
  maxPixels: 1e10
});
