var ndx = require('../lib/index.js');
var opts = {
    tests: ['tests/MochaExTest.js'],
    'no-color': false
};

ndx.RunMocha(opts);