'use strict';

const gulp = require('gulp'),
    clean = require('gulp-clean'),
    gulpCopy = require('gulp-copy'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    filter = require('gulp-filter'),
    image = require('gulp-image'),
    watch = require('gulp-watch'),
    stylish = require('jshint-stylish'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babelify = require('babelify'),
    ngAnnotate = require('browserify-ngannotate'),
    bulkify = require('bulkify'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    inject = require('gulp-inject'),
    mainBowerFiles = require('gulp-main-bower-files'),
    gulpFilter = require('gulp-filter'),
    browserSync = require('browser-sync').create(),
    proxy = require('proxy-middleware'),
    restEmulator = require('gulp-rest-emulator'),
    templateCache = require('gulp-angular-templatecache'),
    replace = require('gulp-replace'),
    url = require('url'),
    _ = require('lodash'),
    nodeResolve = require('resolve'),
    runSequence = require('run-sequence');

const production = (process.env.NODE_ENV === 'production');
const buildConfig = require('./build/buildConfig.json');

const src = 'src/';
const dest = 'dist/';
const paths = {
    index: [src + 'index.html'],
    view: [src + 'app/modules/**/*.html'],
    image: [src + 'assets/images/**/*'],
    style: [src + '**/*/*.scss'],
    styleApp: [src + 'app/styles/app.scss'],
    script: [src + 'app/**/*.js', src + 'base/**/*.js'],
    scriptApp: src + 'app/app.js',
    mock: ['./mocks/**/*.js']
};
const assetExtensions = [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?',
    'html',
    'map',
    'ico'
];

// 清除dist目录
gulp.task('clean', function() {
    return gulp.src(dest, { read: false })
        .pipe(clean({ force: true }));
});

// 打包html
gulp.task('index', function() {
    return gulp.src(paths.index)
        // .pipe(inject(gulp.src(bowerFiles(), { read: false }), { name: 'bower' }))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
});

gulp.task('view', function() {
    return gulp.src(paths.view)
        .pipe(templateCache({
            root: '',
            templateHeader: 'module.exports=angular.module("<%= module %>"<%= standalone %>, []).run(function($templateCache) {"ngInject";',
            templateFooter: '});'
        }))
        .pipe(gulp.dest('tmp'));
});

// 打包图片
gulp.task('image', function() {
    return gulp.src(paths.image)
        // .pipe(image())
        .pipe(gulp.dest(dest + '/images'))
        .pipe(browserSync.stream());
})

// lint js sources based on .jshintrc ruleset
gulp.task('jsHint', function(done) {
    return gulp
        .src(paths.script)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', gutil.log);
});

// 打包JS
function bundle() {
    let bundler = browserify({
        entries: paths.scriptApp,
        paths: [src + 'base/scripts'],
        debug: !production,
    });
    bundler.transform(ngAnnotate);
    bundler.transform(bulkify);
    bundler.transform("babelify", { presets: ["es2015"] });
    getNPMPackageIds().forEach(function(id) {
        bundler.external(id);
    });

    let stream = bundler
        .bundle()
        .pipe(source('app.js'));

    stream = replaceBuildConfigs(stream);

    stream.pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: !production }))
        .pipe(uglify({
            mangle: production,
            compress: production,
            output: {
                beautify: !production
            }
        }))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest + '/js'))
        .pipe(browserSync.stream());
}


gulp.task('lib', function() {
    let filterJS = gulpFilter('**/*.js', { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                plupload: {
                    main: [
                        './js/plupload.dev.js',
                        './js/moxie.js'
                    ]
                }
            }
        }))
        .pipe(filterJS)
        .pipe(filterJS.restore)
        .pipe(gulp.dest(dest + '/lib'));
});

gulp.task('js-vendor', function() {
    let b = browserify({
        debug: !production
    });

    // do the similar thing, but for npm-managed modules.
    // resolve path using 'resolve' module
    getNPMPackageIds().forEach(function(id) {
        b.require(id, { expose: id });
    });

    let stream = b
        .bundle()
        .on('error', function(err) {
            // print the error (can replace with gulp-util)
            console.log(err.message);
            // end this stream
            this.emit('end');
        })
        .pipe(source('vendor.js'));

    stream.pipe(gulp.dest(dest + '/js'));

    return stream;
});

gulp.task('js-app', ['view'], bundle);

// 打包sass
let compileSASS = function(filename) {
    let opts = {
        includePaths: [src + 'app/modules']
    };
    if (production) {
        opts.outputStyle = 'compressed';
    }
    return gulp.src(paths.styleApp)
        .pipe(sourcemaps.init())
        .pipe(sass(opts).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat(filename))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest + '/css'))
        .pipe(browserSync.stream());
};

gulp.task('sass', function() {
    return compileSASS('app.css');
});

// 打包css
gulp.task('css-vendor', function() {
    let filterCss = gulpFilter('**/*.css', { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                'font-awesome': {
                    main: [
                        './css/font-awesome.min.css',
                    ]
                },
                'bootstrap-sass': {
                    ignore: true
                }
            }
        }))
        .pipe(filterCss)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(dest + '/css'));
})

// 启动服务器
gulp.task('browser-sync', function() {
    const DEFAULT_FILE = 'index.html';
    const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${assetExtensions.join('|')})\\b(?!\\.)`, 'i');

    browserSync.init({
        browser: ["chrome"],
        server: {
            baseDir: './dist'
        },
        middleware: function(req, res, next) {
            let fileHref = url.parse(req.url).href;

            if (!ASSET_EXTENSION_REGEX.test(fileHref)) {
                req.url = '/' + DEFAULT_FILE;
            }

            return next();
        }
    });
});

// 打包fonts
gulp.task('fonts', function() {
    return gulp.src([
            'bower_components/font-awesome/fonts/*',
            'bower_components/bootstrap-sass/assets/fonts/**/*'
        ])
        .pipe(gulp.dest(dest + '/fonts'));
})

// mock server
gulp.task('mock', function() {
    // Options not require
    let options = {
        port: 8000,
        root: ['./'],
        rewriteNotFound: false,
        rewriteTemplate: 'index.html',
        corsEnable: true, // Set true to enable CORS
        corsOptions: {}, // CORS options, default all origins
        headers: {
            'Content-Language': 'zh-CN',
            'Content-Type': 'text/json;charset=UTF-8',
            'Access-Control-Expose-Headers': 'X-head1' // TODO: should be delete
        } // Set headers for all response, default blank
    };
    return gulp.src(paths.mock)
        .pipe(restEmulator(options));
});

// 启动监视
gulp.task('watch', function() {
    watch(paths.index, function() {
        gulp.start(['index']);
    });
    watch(paths.script, function() {
        gulp.start(['jsHint', 'js-app']);
    });
    watch(paths.image, function() {
        gulp.start(['image']);
    });
    watch(paths.view, function() {
        gulp.start(['js-app']);
    });
    watch(paths.style, function() {
        gulp.start(['sass']);
    });
    watch(paths.mock, function() {
        gulp.start(['mock']);
    });
});

// 打包
function buildAll() {
    runSequence('clean', [
        'index',
        'image',
        'lib',
        'js-vendor',
        'jsHint',
        'js-app',
        'css-vendor',
        'sass',
        'fonts',
        'watch',
        'mock'
    ], [
        'browser-sync'
    ]);
}

// 打包 -- 开发环境
gulp.task('default', function(cb) {
    process.env.NODE_ENV = 'dev';
    buildAll();
});

// 打包 -- 测试环境
gulp.task('test', function(cb) {
    process.env.NODE_ENV = 'test';
    buildAll();
});

function replaceBuildConfigs(stream) {
    let env = process.env.NODE_ENV;
    let envConfig = buildConfig[env];
    _.forIn(envConfig, function(value, key) {
        let replaceKey = '${' + key + '}';
        stream = stream.pipe(replace(replaceKey, value));
    });
    return stream;
}

function getNPMPackageIds() {
    // read package.json and get dependencies' package ids
    let packageManifest = {};
    try {
        packageManifest = require('./package.json');
    } catch (e) {
        // does not have a package.json manifest
    }

    let dependencies = _.keys(packageManifest.dependencies) || [];
    let bowerDependencies = _.keys(packageManifest.browser) || [];
    return _.concat(dependencies, bowerDependencies);
}

// 代码生成
const nunjucksRender = require('gulp-nunjucks-render');
const nunjucks = require('nunjucks');

gulp.task('gen-clean', function() {
    return gulp.src('./generator/outputs', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('gen', ['gen-clean'], function() {
    let dataName = gutil.env.data;
    if (!dataName) {
        throw '请输入模块名, 例如：gulp gen --data photo';
    }
    console.log(`开始生成模块${dataName}的代码：`);

    let genData = require(`./generator/datas/${dataName}.json`);

    return gulp.src('./generator/templates/**/*')
        .pipe(nunjucksRender({
            data: genData,
            path: ['./generator/templates'],
            inheritExtension : true
        }))
        .pipe(rename(function(path) {
            path.dirname = nunjucks.renderString(path.dirname, genData);
            path.basename = nunjucks.renderString(path.basename, genData);
        }))
        .pipe(gulp.dest('./generator/outputs'));
});
