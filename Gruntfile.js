'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        less: {
            build: {
                expand: true,
                cwd: './less/',
                src: 'valid.less',
                dest: './css/',
                ext: '.css'
            }
        }
    });

    grunt.registerTask('default', ['less']);
};
