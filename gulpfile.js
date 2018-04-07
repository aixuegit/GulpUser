var gulp = require('gulp');//依赖gulp插件
var sass=require('gulp-sass');//sass  预编译插件
var autoprefixer = require('gulp-autoprefixer');//自动添加浏览器前缀
var babel= require("gulp-babel");//将es6转化为es5
//声明gulp任务 gulp.task("name",deps,function(){});
//deps
//类型： Array
//
//一个包含任务列表的数组，这些任务会在你当前任务运行之前完成。
gulp.task("html",function(){
	gulp.src("./html/*.html").pipe(gulp.dest("./build/html"));
});// 将你的默认的任务代码放在这

gulp.task("css",function(){
	gulp.src(["./src/css/*.css",'src/css/*.scss']).pipe(sass()).pipe(autoprefixer()).pipe(gulp.dest("./build/css"));
});

//监听文件的变动

gulp.task("babel",function(){
	
	gulp.src('./src/javascript/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task("watch",function(){
	gulp.watch("",[''])
});//
gulp.task("default",[],function(){});
