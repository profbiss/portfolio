const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const watch = require("gulp-watch");

gulp.task("sass-compile", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
        cascade: true
      })
    )
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css/"));
});

gulp.task("watch", function() {
  gulp.watch("./scss/**/*.scss", gulp.series("sass-compile"));
});
