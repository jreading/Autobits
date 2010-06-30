/**
 * jQuery AutoBits Plugin
 *
 * autoBits.js is licensed under a Creative Commons Attribution-Share Alike 3.0 United States License.
 * http://creativecommons.org/licenses/by-sa/3.0/us/
 *
 * Date: 4/19/10
 *
 * @author John Reading - Resonance Multimedia LLC
 * @version 1.1 
 * @see jQuery v1.2.6 or later
 *
 * @projectDescription autoBits.js is a simple binary (base 2) bitwise plugin for jQuery. You can use it to send lots an lots of boolean values in a little package. Requires jQuery v1.2.6 or later
 *
 *
 * TODO
 * Randomize function, remapping and bitshifting
 *
 *
 * @type Object
 * @example optimusPrime = autoBits();
 * @param   {Object}        options   bits, map, debug
 */
var autoBits = function(options) {

	if (this instanceof autoBits) {

		var defaults = {
			bits: 0,
			map: [],
			debug: false
		};
		var options = $.extend({}, defaults, options);


		this.isSet = function(value) {
			if (options.map.indexOf(value) < 0) {
				log('isSet: ' + value + ' not found in map');
				return this;
			} else {
				binaryVal = getBinary(options.map.indexOf(value));
				return (binaryVal & options.bits) > 0
			}
		};

		this.getBooleans = function(value) {
			var booleanArr = new Array;
			for (i=0; i < options.map.length; i++) {
				getBinary(i) & options.bits ? booleanArr.push(true) : booleanArr.push(false);
			}
			return booleanArr
		};

		this.getBits = function(value) {
			log('bits: ' + options.bits );
			return options.bits;
		};

		this.addBit = function(value) {
			if (options.map.indexOf(value) < 0) {
				log('addBits: ' + value + ' not found in map');
				return this;
			} else {
				binaryVal = getBinary(options.map.indexOf(value));
				if ((binaryVal & options.bits) > 0) {
					log('addBits: ' + value + ' bit exists already in map. ' + options.bits);
					return this;
				} else {
					options.bits += binaryVal;
					log('addBits: ' + binaryVal + ' set');
					return options.bits;
				}
			}
		};

		this.removeBit = function(value) {
			if (options.map.indexOf(value) < 0) {
				log('removeBits: ' + value + ' not found in map');
				return this;
			} else {
				binaryVal = getBinary(options.map.indexOf(value));
				if (!(binaryVal & options.bits)) {
					log('removeBits: ' + value + ' bit doesn\'t exist in map. ' + options.bits);
					return this;
				} else {
					options.bits -= binaryVal;
					log('removeBits: ' + binaryVal + ' removed');
					return options.bits;
				}
			}
		};

		this.randomize = function() {
			log('randomize: ' + options.bits);
			return options.bits;
		};

		this.clear = function(value) {
			options.bits = 0;
			return options.bits;
		};

		var getBinary = function(value) {
			return Math.pow(2,value);
		};

		var log = function() {
			if (options.debug && window.console && window.console.log)
				window.console.log('[jquery.autobits] ' + Array.prototype.join.call(arguments,''));
		};
	} else {
		return new autoBits(options);
	}
};

