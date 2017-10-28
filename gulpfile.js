'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const banner = require('gulp-banner');
const pkg = require('./package.json');
const clean = require('gulp-clean');
const jasmineBrowser = require('gulp-jasmine-browser');

const bannerString =
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

gulp.task('clean', () => {
	return gulp.src('dist/*.js', { read: false }).pipe(clean());
});

gulp.task('test', function() {
	return gulp
		.src(['maari.js', 'spec/*Spec.js'])
		.pipe(jasmineBrowser.specRunner())
		.pipe(jasmineBrowser.server({ port: 8888 }));
});

gulp.task('release', () => {
	return gulp
		.src('./maari.js')
		.pipe(
			babel({
				presets: ['env']
			})
		)
		.pipe(rename('maari.min.js'))
		.pipe(uglify())
		.pipe(
			banner(bannerString, {
				pkg: pkg
			})
		)
		.pipe(gulp.dest('dist/'));
});
