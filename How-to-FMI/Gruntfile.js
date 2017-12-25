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
            }
        },
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
                tasks: ['watch:livereload', 'watch:lint', 'eslint']
            }
        },
        eslint: {
            target: ['app/js/**/*.js', '!app/js/lib/**/*.js'],
            options: {
                configFile: '.eslintrc.json'
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['connect:dev', 'concurrent:watch', 'eslint']);
};
