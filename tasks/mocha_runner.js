'use strict';

var runner = require('../lib/index.js');

module.exports = function (grunt) {
    grunt.registerMultiTask('mocha', 'Run Mocha server-side tests.', function () {
        var done = this.async();
        var taskOptions = this.options();
        var envOptions = this.data;
        var cliArgs = grunt.option.flags();
        /*
        console.dir(taskOptions);
        console.dir(envOptions);
        console.dir(cliArgs);
        */

        // HANDLE MERGING ALL OPTIONS TOGETHER WITH PROPER OVER-RIDING
        //var mergedOpts = {};
        //runner.RunMocha(mergedOpts, done);
        //------------------------------------------------------------
        runner.RunMocha(taskOptions, cliArgs, done);
        return;
    });
};