'use strict';

var Server = require('karma').Server;
new Server({
	configFile: __dirname + '/karma.conf.js'
}).start();
