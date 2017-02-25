var gulp=require('gulp');
var $=require('gulp-load-plugins')();
var open=require('open');
var app={
    srcPath:'src/',
    devPath:'build/',
    praPath:'dist/'
};
gulp.task('lib',function(){
    gulp.src('bower_components/**/*.js')
    .pipe(gulp.dest(app.devPath+'vendor'))
    .pipe(gulp.dest(app.praPath+'vendor'))
        .pipe($.connect.reload());
});
gulp.task('html',function(){
    gulp.src(app.srcPath+'**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.praPath))
        .pipe($.connect.reload());
});
gulp.task('json',function(){
    gulp.src(app.srcPath+'data/**/*.json')
        .pipe(gulp.dest(app.devPath+'data'))
        .pipe(gulp.dest(app.praPath+'data'))
        .pipe($.connect.reload());
});
gulp.task('less',function(){
    gulp.src(app.srcPath+'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath+'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.praPath+'css'))
        .pipe($.connect.reload());
});
gulp.task('js',function(){
    gulp.src(app.srcPath+'script/**/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath+'js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.praPath+'js'))
        .pipe($.connect.reload());
});
gulp.task('image',function(){
    gulp.src(app.srcPath+'image/**/*')
        .pipe(gulp.dest(app.devPath+'image'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.praPath+'image'))
        .pipe($.connect.reload());
});
gulp.task('build',['image','js','less','lib','html','json']);
gulp.task('clean',function(){
    gulp.src([app.devPath, app.praPath])
        .pipe($.clean());
})
gulp.task('serve',function(){
    $.connect.server({
        root:[app.devPath],
        livereload:true,
        port:1234
    });
    open('http://localhost:1234');

    gulp.watch('bower_components/**/*',['lib']);
    gulp.watch(app.srcPath+'/**/*.html',['html']);
    gulp.watch(app.srcPath+'/data/*.json',['json']);
    gulp.watch(app.srcPath+'/style/*.json',['less']);
    gulp.watch(app.srcPath+'script/**/*.js',['js']);
    gulp.watch(app.srcPath+'image/**/*.js',['image']);

})

gulp.task('default',['serve']);