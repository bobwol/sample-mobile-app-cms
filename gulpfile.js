var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
gulp.task('css', function () {
  gulp.src('./app/styles/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/styles/*.css'], ['css']);
  gulp.watch(['./app/scripts/controllers/*.js'], ['controllersjs']);
});
gulp.task('jquery', function() {
    return gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('./app/scripts/'));
});
gulp.task('jqueryui', function() {
    return gulp.src(['./bower_components/jquery-ui/jquery-ui.min.js'])
    .pipe(gulp.dest('./app/scripts/'));
});
//angular
gulp.task('angular', function() {
    return gulp.src(['./bower_components/angular/angular.js'])
    .pipe(gulp.dest('./app/scripts/'));
});
gulp.task('ngresources', function() {
  gulp.src(['./bower_components/angular-ui-router/release/angular-ui-router.js', './bower_components/angular-dragdrop/src/angular-dragdrop.js', './bower_components/angular-animate/angular-animate.js'])
    .pipe(concat('ng-resources.js'))
    .pipe(gulp.dest('./app/scripts/'))
});
gulp.task('angularfire', function() {
    return gulp.src(['./bower_components/angularfire/angularfire.js'])
    .pipe(gulp.dest('./app/scripts/'));
});
//bowerstyles
gulp.task('bowerstyles', function() {
  gulp.src('./bower_components/font-awesome/css/font-awesome.css')
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest('./app/styles/'))
});
// Fonts
gulp.task('fonts', function() {
    return gulp.src(['./bower_components/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('./app/fonts/'));
});
//controllers
gulp.task('controllersjs', function() {
  gulp.src('app/scripts/controllers/*.js')
    .pipe(concat('controllers.js'))
    .pipe(gulp.dest('app/scripts/'))
    .pipe(connect.reload())
});

gulp.task('concat', ['angular', 'ngresources', 'bowerstyles', 'fonts', 'controllersjs', 'jquery', 'jqueryui', 'angularfire']);
gulp.task('default', ['connect', 'watch']);