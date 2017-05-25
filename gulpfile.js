const gulp= require('gulp'),
	 sass= require('gulp-sass'),
	 autoprefixer= require('gulp-autoprefixer');

	 gulp.task('sass', ()=>
	 	gulp.src('./scss/*.scss')
	 		.pipe(sass({
	 			outputStyle: 'nested'
	 		}))
	 		.pipe(autoprefixer({
 				versions: ['last 2 browers']
 			}))
	 		.pipe(gulp.dest('./css'))
	 );