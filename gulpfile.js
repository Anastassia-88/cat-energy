"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const htmlmin = require("gulp-htmlmin");
const jsmin = require("gulp-terser");
const del = require("del");
const server = require("browser-sync").create();
const ghPages = require("gh-pages");
const path = require("path");



// Publish website using GitHub pages
// npx gulp deploy
function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;

//  Remove all files in the "build" folder
gulp.task("clean", function () {
  return del("build");
});

//  Copy files from the "source" folder to the "build" folder
gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

//  Convert images from the "source" folder to WebP and save them in the "build" folder
gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

//  Combine svg files into one with <symbol> elements
gulp.task("sprite", function () {
  return gulp.src("source/img/sprite/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

//  Prefix CSS properties
gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

// Minify and copy images from the "source" folder to the "build" folder
gulp.task("imagemin", function () {
  return gulp.src("source/img/**/*{.png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

//  Combine svg files into one with <symbol> elements
gulp.task("sprite", function () {
  return gulp.src("source/img/sprite/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

//  Minify HTML
gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

//  Minify JavaScript
gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(jsmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/js"))
    .pipe(server.stream());
});

// npm run build
gulp.task("build", gulp.series("clean", gulp.parallel("copy", "css", "sprite", "webp", "js", "imagemin"), "html"));


gulp.task("server", function () {
  server.init({
    server: "build/"
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

// npm start
gulp.task("start", gulp.series("build", "server"));
