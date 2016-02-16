'use strict';

/*
	@jcf = JCF instance
 */

var $ = require('jquery');
var template = require('raw!./template.html');
var jcfResolver;

var checkbox;
var file;
var number;
var radio;
var range;
var scrollable;
var select;
var textarea;

describe('General test using jcf with webpack', function() {

	beforeEach(function() {
		// resolve jcf
		jcfResolver = require('./../jcf');

		// replace template
		document.body.innerHTML = template;

		// get dom elements
		file = $('[type="file"]').first();
		radio = $('[type="radio"]').first();
		range = $('[type="range"]').first();
		scrollable = $('.jcf-scrollable').first();
		select = $('select').first();
		textarea = $('textarea').first();
		number = $('[type="number"]').first();
		checkbox = $('[type="checkbox"]').first();
	});

	function check() {
		expect(number.data('jcfInstance')).toBeUndefined();
		expect(checkbox.data('jcfInstance')).toBeUndefined();
		expect(file.data('jcfInstance')).toBeUndefined();
		expect(radio.data('jcfInstance')).toBeUndefined();
		expect(range.data('jcfInstance')).toBeUndefined();
		expect(scrollable.data('jcfInstance')).toBeUndefined();
		expect(select.data('jcfInstance')).toBeUndefined();
		expect(textarea.data('jcfInstance')).toBeUndefined();
		expect(number.data('jcfInstance')).toBeUndefined();
		expect(checkbox.data('jcfInstance')).toBeUndefined();

		jcf.replaceAll();

		expect(number.data('jcfInstance')).not.toBeUndefined();
		expect(number.data('jcfInstance').realElement.get(0)).toBe(number.get(0));
		expect(checkbox.data('jcfInstance')).not.toBeUndefined();
		expect(checkbox.data('jcfInstance').realElement.get(0)).toBe(checkbox.get(0));
	}

	function destroy() {
		jcf.destroyAll();

		expect(number.data('jcfInstance')).toBeUndefined();
		expect(checkbox.data('jcfInstance')).toBeUndefined();
	}

	it('should work with every module init', function() {
		jcfResolver.number();
		jcfResolver.checkbox();

		check();

		// check not inited module
		expect(select.data('jcfInstance')).toBeUndefined();
		destroy();
	});

	it('should work with init with massive init', function() {
		jcfResolver.initAll(['number', 'checkbox']);

		check();
		expect(select.data('jcfInstance')).toBeUndefined();
		destroy();
	});

	it('should work with init with chain init', function() {
		jcfResolver.number().checkbox();

		check();
		expect(select.data('jcfInstance')).toBeUndefined();
		destroy();
	});

	it('should work with init with initAll', function() {
		jcfResolver.initAll();

		check();

		// check all modules
		expect(select.data('jcfInstance')).not.toBeUndefined();
		expect(number.data('jcfInstance')).not.toBeUndefined();
		expect(checkbox.data('jcfInstance')).not.toBeUndefined();
		expect(file.data('jcfInstance')).not.toBeUndefined();
		expect(radio.data('jcfInstance')).not.toBeUndefined();
		expect(range.data('jcfInstance')).not.toBeUndefined();
		expect(scrollable.data('jcfInstance')).not.toBeUndefined();
		expect(select.data('jcfInstance')).not.toBeUndefined();
		expect(textarea.data('jcfInstance')).not.toBeUndefined();
		expect(number.data('jcfInstance')).not.toBeUndefined();
		expect(checkbox.data('jcfInstance')).not.toBeUndefined();
		destroy();
	});

	afterEach(function() {
		// clear jcf cache
		delete require.cache[require.resolve('./../jcf')];

		// clear jcf valiable
		delete window['jcf'];
	});
});

