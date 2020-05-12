const fs = require('fs');
const { dest, parallel, src } = require('gulp');
const changed = require('gulp-changed');
const mkdirp = require('mkdirp');

exports.patternflyCss = function () {
  return src('./node_modules/@patternfly/patternfly/*.min.css')
    .pipe(dest('./dist/css'));
};

exports.patternflyAssets = function() {
  if (!fs.existsSync('./dist/assets')) {
    mkdirp.sync('./dist/assets');
  }
  return src('./node_modules/@patternfly/patternfly/assets/**', {buffer: false})
    .pipe(changed('./dist/assets'))
    .pipe(dest('./dist/assets'));
}

exports.patternflyIcons = function() {
  if (!fs.existsSync('./dist/icons')) {
    mkdirp.sync('./dist/icons');
  }
  return src('./node_modules/@patternfly/patternfly/icons/**', {buffer: false})
    .pipe(changed('./dist/icons'))
    .pipe(dest('./dist/icons'));
}

exports.patternfly = function() {
  return parallel(
    exports.patternflyCss,
    exports.patternflyAssets,
    exports.patternflyIcons
  );
}

exports.patternflyCss.description = 'Copies Patternfly CSS to dist.';
exports.patternflyAssets.description = 'Copies Patternfly assets to dist';
exports.patternflyIcons.description = 'Copies Patternfly icons to dist';
exports.patternfly.description = 'Deploys Patternfly dependencies.';
