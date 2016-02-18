'use strict';

(function(self) {
	var jcf = self.jcf = require('./jcf');

	require('./jcf.file');
	require('./jcf.radio');
	require('./jcf.range');
	require('./jcf.button');
	require('./jcf.number');
	require('./jcf.select');
	require('./jcf.checkbox');
	require('./jcf.textarea');
	require('./jcf.scrollable');

	try {
		(self.angular || require('angular')) && require('./jcf.angular');
	} catch(e) { }

	delete self.jcf;

	module.exports = jcf;
}(global));
