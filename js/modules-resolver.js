'use strict';

var skipInstall = ['initAll', 'angular'];

var resolveModule = function(jcfModule) {
	var moduleResolver = resolver[jcfModule];

	if (typeof moduleResolver === 'function' && skipInstall.indexOf(jcfModule) < 0) {
		moduleResolver();
	}
};

var resolver = {
	angular: function() { require('./jcf.angular')(); return this; },
	button: function() { require('./jcf.button')(); return this; },
	checkbox: function() { require('./jcf.checkbox')(); return this; },
	file: function() { require('./jcf.file')(); return this; },
	number: function() { require('./jcf.number')(); return this; },
	radio: function() { require('./jcf.radio')(); return this; },
	range: function() { require('./jcf.range')(); return this; },
	scrollable: function() { require('./jcf.scrollable')(); return this; },
	select: function() { require('./jcf.select')(); return this; },
	textarea: function() { require('./jcf.textarea')(); return this; },
	initAll: function(source) {
		if (Object.prototype.toString.call( source ) === '[object Array]') {
			for (var i = 0; i < source.length; i++) {
				resolveModule(source[i]);
			}
		} else {
			for (var jcfModule in resolver) {
				if (resolver.hasOwnProperty(jcfModule)) {
					resolveModule(jcfModule);
				}
			}
		}

		return this;
	}
};

module.exports = resolver;
