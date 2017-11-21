'use strict';

module.exports = function (grunt) {

grunt.initConfig({
    sass: {
        dist: {
            options: {
                style: 'expanded'
            },
            files: [{
			expand: true,
			cwd: 'sass',
			src: ['**/*.scss'],
			dest: 'css',
			ext: '.css'
			}]
        }
    }
});
grunt.loadNpmTasks('grunt-sass');

grunt.registerTask('default', ['sass']);
};