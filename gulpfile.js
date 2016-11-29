var gulp = require("gulp");
var babel = require("gulp-babel");
const sourse = "src/js/*.js";
const dist= "dist/js/";


gulp.task("default", function () {
  return gulp.src(sourse)
    .pipe(babel())
    .pipe(gulp.dest(dist));
});
