const del = require('del');
const { parallel } = require('gulp');
const options = require('../gulpconfig');

exports.cleanCSS = function() {
  return del([options.paths.root() + '/dist/css/*'], { force: true });
};

exports.cleanJS = function() {
    return del(['./dist/js/*'], { force: true });
};

exports.cleanAssets = function() {
  return del(['./dist/assets/*'], { force: true });
}

exports.cleanIcons = function() {
  return del(['./dist/icons/*'], { force: true });
}

exports.clean = parallel(
  exports.cleanCSS,
  exports.cleanJS,
  exports.cleanAssets,
  exports.cleanIcons
);

exports.cleanCSS.description = "Cleans CSS from dist.";
exports.cleanJS.description = "Cleans JS from dist.";
exports.cleanAssets.description = "Cleans assets from dist.";
exports.cleanIcons.description = "Cleans icons from dist.";
exports.clean.description = "Cleans dist folder.";
