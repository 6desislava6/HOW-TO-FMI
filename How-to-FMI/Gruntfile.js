const wiredep = require('wiredep');

var libs = wiredep({
    exclude: ['app/lib/bootstrap/']
});

var jsLibPaths = libs.js || [];
var cssLibPaths = libs.css || [];

// add bootstrap manually because of faulty main in its bower.json
jsLibPaths.push('app/lib/bootstrap/dist/js/bootstrap.min.js');
cssLibPaths.push('app/lib/bootstrap/dist/css/bootstrap.min.css');

// add app css
cssLibPaths.push('app/css/**/*.css');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            dev: {
                options: {
                    port: 8282,
                    hostname: '*',
                    livereload: true,
                    base: './app',
                    open: true
                }
            },
            prod: {
                options: {
                    port: 8080,
                    hostname: '*',
                    base: './dist',
                    keepalive: true
                }
            }
        },
        clean: {
            dist: {
                app: ['dist/**']
            },
            postBuildJs: {
                /*
                    TODO: create a seperate build step to a temp folder,
                    we can utilize this temp step to also use sass and
                    or other preprocessors.
                */
                app: ['app/js/templates.js']
            }
        },
/*        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['dist/index.html']
                }
            }
        },*/
/*        uglify: {
            lib: {
                files: {
                    'dist/js/lib.min.js': jsLibPaths
                }
            },
            module: {
                files: {
                    'dist/js/module.js': [
                        'dist/app/es5-app/app/js/module.js'
                    ]
                }
            },
            app: {*/
                //app: ['dist/app/es5-app/**/*.js', '!dist/app/es5-app/app/js/module.js'],
               /* dest: 'dist/js/app.min.js'
            }
        },*/
/*        cssmin: {
            build: {
                app: cssLibPaths,
                dest: 'dist/css/style.min.css'
            }
        },*/
        watch: {
            livereload: {
                files: [
                    'app/**/*.js',
                    'app/css/**/*.css',
                    'app/views/**/*.html',
                    'app/index.html'
                ],
                options: {
                    livereload: true,
                    spawn: false
                }
            },
            lint: {
                files: [
                    'app/**/*.js',
                    '!app/js/lib/**/*.js'
                ],
                tasks: ['eslint']
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            watch: {
                tasks: ['watch:livereload', 'watch:lint']
            }
        },
        ngtemplates: {
            views: {
                cwd: 'app/',
                app: 'views/**/*.html',
                dest: 'dist/app/es5-app/app/templates.js',
                options: {
                    module: 'amplifyData',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        eslint: {
            target: ['app/js/**/*.js', '!app/js/lib/**/*.js'],
            options: {
                configFile: '.eslintrc.json'
            }
        },
        babel: {
            options: {
                sourceMap: false,
                // presets: ['es2015'],
                presets: [
                    ['es2015', { 'modules': false }]
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    app: ['app/js/**/*.js'],
                    dest: 'dist/app/es5-app'
                }]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('update-index-js-dependensies', function () {
        wiredep({ app: 'app/index.html' });
    });

/*    grunt.registerTask('build-js', ['ngtemplates:views', 'uglify:lib', 'uglify:app', 'uglify:module', 'clean:postBuildJs']);

    grunt.registerTask('build', ['cssmin:build', 'babel', 'build-js', 'processhtml:dist']);*/

    grunt.registerTask('run-dev', ['update-index-js-dependensies', 'connect:dev', 'concurrent:watch']);
    grunt.registerTask('run-prod', ['connect:prod']);
    grunt.registerTask('default', ['run-dev']);
};
