'use strict';

// Set up module vars and defaults
var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path'),
    _ = require('lodash');
var util = require('util');

var testDir = 'tests';
var mochaRunOpts = {};

var cliArgAliases = {
    '-t': '-t',
    '--test': '-t',
    '-T': '-T',
    '--tests': '-T',
};


exports.RunMocha = function (taskOpts, cliArgs, callback) {
    console.dir(taskOpts);
    var args = require('minimist')(cliArgs);
    console.dir(args);
    /*console.dir(process.argv.slice(2));
    console.dir(opts);
    _.forEach(opts, function (val, op) {
        console.log(`${op} : ${util.inspect(val)}`);
    });
    console.log(cliArgAliases['--tests']);
    */
    if (typeof callback === 'function') {
        callback();
    }
}

var initializeMocha = function () {
    var mocha = new Mocha(mochaRunOpts);

    // Add each .js file to the mocha instance
    fs.readdirSync(testDir).filter(function (file) {
        // Only keep the .js files
        return file.substr(-3) === '.js';

    }).forEach(function (file) {
        mocha.addFile(
            path.join(testDir, file)
        );
    });
    //console.log(mocha);
}

var runMocha = function () {
    // Run the tests.
    mocha.run(function (failures) {
        process.on('exit', function () {
            process.exit(failures);  // exit with non-zero status if there were failures
        });
    });
}