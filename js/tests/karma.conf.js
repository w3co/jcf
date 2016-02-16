// Karma configuration
// Generated on Tue Feb 16 2016 16:57:05 GMT+0200 (Финляндия (зима))

module.exports = function(config) {
	config.set({
		autoWatch: true,

		browsers: ['PhantomJS'],

		files: [ './index.js' ],

		frameworks: ['jasmine'],

		preprocessors: {
			'./index.js': ['webpack']
		},

		webpack: { },

		reporters: ['dots'],

		webpackMiddleware: { noInfo: true }
	});
};
