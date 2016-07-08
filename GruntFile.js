module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha: {
            options:{
                reporter: 'doc'
            },
            default: {
                tests: ['tests/MochaExTest.js']
            },
            tst: {
                tests: ['tests/MochaExTest2.js']
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                node: true,
                quotmark: true,
                esversion: 6
            },
            uses_defaults: ['GruntFile.js', 'lib/*.js', 'lib/**/*.js', 'tasks/*.js', 'tasks/**/*.js', 'tests/*.js', 'tests/**/*.js']
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.task.loadTasks('./tasks');

    // Default task(s).
    grunt.registerTask('default', []);
    grunt.registerTask('lint', ['jshint']);
    console.log('GruntFile loaded');
    //console.log(grunt);
};