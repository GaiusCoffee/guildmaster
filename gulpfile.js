var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src([
        "node_modules\\popper.js\\dist\\umd\\popper.min.js",
        "node_modules\\jquery\\dist\\jquery.min.js",
        "node_modules\\bootstrap\\dist\\js\\bootstrap.min.js"])
        .pipe(gulp.dest("js"));
    gulp.src([
        "node_modules\\bootstrap\\dist\\css\\bootstrap.min.css"])
        .pipe(gulp.dest("css"));
});
