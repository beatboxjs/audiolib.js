var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("default", [ "resources", "minify" ]);

gulp.task("resources", function() {
	return gulp.src("node_modules/audiolib/lib/audiolib.js")
		.pipe(gulp.dest("dist"));
});

gulp.task("minify", [ "resources" ], function() {
	return gulp.src("dist/audiolib.js").pipe(uglify()).pipe(concat("audiolib.min.js")).pipe(gulp.dest("dist"));
});