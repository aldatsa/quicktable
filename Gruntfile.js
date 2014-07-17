/* jshint node: true */

module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
		jshint: {
			all: [
				"lang/*.js", 
				"*.js"
			], 
			options: {
				jshintrc: '.jshintrc'
			}
		},
		lint5: {
			dirPath: "samples",
			templates: [
				"quicktable.html"
			]
			//,
			// ignoreList: [
			// ]
		},
		compress: {
			main: {
				options: {
					archive: 'release/<%= pkg.name %>-<%= pkg.version %>.zip'
				},
				files: [
					{
						src: [
							'**', 
							// Exclude files and folders
							'!node_modules/**', 
							'!release/**', 
							'!.*', 
							'!Gruntfile.js', 
							'!package.json', 
							'!LICENSE', 
							'!README.md', 
							'!*.zip'
						], 
						dest: '<%= pkg.name %>/'
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-lint5');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint', 'lint5']);
	grunt.registerTask('build', ['test', 'compress']);
	grunt.registerTask('default', ['test']);
};