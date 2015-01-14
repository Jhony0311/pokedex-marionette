module.exports = function (grunt) {

    var buildConfig = {
        app: 'public',
        dist: 'dist'
    };

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 9000,
                    base: buildConfig.app,
                },
            }
        },
        open: {
            server: {
                path: 'http://localhost:9000',
            }
        },
        clean: {
            css: [buildConfig.app + '/styles'],
        },
        sprite:{
            all: {
                src: buildConfig.app + '/img/sprites/*.png',
                dest: buildConfig.app + '/img/spritesheet.png',
                destCss: buildConfig.app + '/sass/modules/_sprites.scss'
            }
        },
        sass: {
            compile: {
                files: [
                    {
                        dest: buildConfig.app + '/styles/main.css',
                        src: buildConfig.app + '/sass/main.scss'
                    },
                ],
                options: {
                    includePaths: [
                        buildConfig.app + '/bower_components/animate.css/source/',
                        buildConfig.app + '/bower_components/foundation/scss/',
                    ]
                }
            },
        },
        autoprefixer: {
            single_file: {
                src: buildConfig.app + '/styles/main.css',
                dest: buildConfig.app + '/styles/main.css'
            }
        },
        watch: {
            sass: {
                files: [buildConfig.app + '/**/*.scss'],
                tasks: ['compile-sass']
            },
            js: {
                files: [buildConfig.app + '/**/*.js'],
            },
            html: {
                files: [buildConfig.app + '/**/*.html', buildConfig.app + '/**/*.hbs'],
            },
            options: {
                livereload: true,
                events: ['all'],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-open');
  
    grunt.registerTask('default', ['compile-sass', 'connect', 'open:server', 'watch' ]);
    grunt.registerTask('compile-sass', ['sprite', 'sass', 'autoprefixer']);

};
