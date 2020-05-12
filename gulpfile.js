/**
 * @file
 * Gulp scripts for PatternFly.
 */

const del = require('del');
const { dest, parallel, series, src, watch } = require('gulp');
const options = require('./gulpconfig');

export * from 'gulp-scripts/clean';
export * from 'gulp-scripts/patternfly';

exports.watch = parallel(series(sassCompile, watchCss),
  series(styleguide, lintSass, watchLintAndStyleguide),
  series(js, lintJs, watchJs));

exports.build = series(
  exports.clean,
  parallel(exports.js,
    sassProduction,
    lint,
    exports.patternfly,
    fonts
  ),
  styleguideProduction
);

exports.watch.description = 'Watches and builds CSS, styleguide, and JS.';
exports.build.description = 'Builds the theme.';
exports.default = exports.build;
