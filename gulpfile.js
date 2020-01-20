// Declaring variables

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const fontmin = require('gulp-fontmin');

const htmlWatch = './src/**/*.html';

const styleSrc = './src/sass/style.scss';
const styleDist = './dist/css/';
const styleWatch = './src/sass/**/*.scss';

const jsSrc = 'script.js';
const jsFolder = 'src/js/';
const jsDist = './dist/js/';
const jsWatch = './src/js/**/*.js';
const jsFiles = [jsSrc];

const imageWatch = './src/images/**/*';

const fontWatch = './src/fonts/**/*';

// Copy all html files to dist folder

let html = (done) => {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));

    done();
};

// Compiling scss files

let css = (done) => {
    gulp.src(styleSrc)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDist));

    done();
};

// Compiling js files

let js = (done) => {
    jsFiles.map((entry) => {
        return browserify({
            entries: [jsFolder + entry] 
        })
        .transform(babelify, {presets: ['@babel/env']})
        .bundle()
        .pipe(source(entry))
        .pipe(rename({extname: '.min.js'}))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDist));
    });

    done();
};

// Optimize images

let imageMin = (done) => {
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));

    done();
};

// Optimize fonts

let fontMin = (done) => {
    gulp.src('src/fonts/**/*.ttf')
        .pipe(fontmin())
        .pipe(gulp.dest('dist/fonts/'));

    done();
};

// Defining gulp tasks

gulp.task('html', html);

gulp.task('css', css);

gulp.task('js', js);

gulp.task('imageMin', imageMin);

gulp.task('fontMin', fontMin);

gulp.task('default', gulp.parallel(html, css, js, imageMin, fontMin));

let watchFiles = () => {
    gulp.watch(htmlWatch, html);
    gulp.watch(styleWatch, css);
    gulp.watch(jsWatch, js);
    gulp.watch(imageWatch, imageMin);
    gulp.watch(fontWatch, fontMin);
}

gulp.task('watch', watchFiles);


