'use strict';

/* eslint no-console:0 */

const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const banner = require('gulp-banner');
const pkg = require('./package.json');

var bannerString =
	'/*\n' +
	' * <%= pkg.name %> <%= pkg.version %>\n' +
	' * <%= pkg.description %>\n' +
	' * <%= pkg.homepage %>\n' +
	' *\n' +
	' * Copyright ' +
	new Date().getFullYear() +
	', <%= pkg.author %>\n' +
	' * Released under the <%= pkg.license %> license.\n' +
	'*/\n\n';

gulp.task('release', () => {
	console.log('Build Started');
	return gulp
		.src('./maari.js')
		.pipe(rename('maari.min.js'))
		.pipe(uglify())
		.pipe(
			banner(bannerString, {
				pkg: pkg
			})
		)
		.pipe(gulp.dest('dist/'));
});
