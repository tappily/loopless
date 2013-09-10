module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist']
        },
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: 'src',
                        src: ['less/loop.less'],
                        dest: 'dist/',
                        filter: 'isFile'
                    }]
            }
        },
        lesslint: {
            options: {
                formatters: [{
                        id: 'csslint-xml',
                        dest: 'report/lesslint.xml'
                    }]
            },
            src: ['src/less/loop.less']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: ['Gruntfile.js']
        },
        less: {
            sample: {
                files: {'dist/css/sample.css': 'src/less/sample.less'}
            }
        },
        release: {
            options: {
                file: 'bower.json'
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'test',
        'build'
    ]);

    grunt.registerTask('test', ['jshint', 'lesslint']);
    grunt.registerTask('build', ['clean', 'test', 'less', 'copy']);
};
