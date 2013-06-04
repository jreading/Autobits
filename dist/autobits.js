/**
AutoBits.js

autoBits.js is licensed under The MIT license

The MIT License (MIT)

Copyright (c) 2013 ResonanceMultimedia LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@author John Reading - Resonance Multimedia LLC
@version 1.2

autoBits.js is a simple binary (base 2) bitwise library. You can use it to send lots an lots of boolean values in a little package. No dependencies.

@example optimusPrime = autoBits();
@param   {Object}        options   bits, map, debug
*/

var autoBits = function(opts) {

	/**
	* Returns whether or not a bit is set in an integer.
	*
	* @this {autoBits}
	* @return {Boolean} Bit is set.
	*/
	this.isSet = function(value) {
		if (options.map.indexOf(value) < 0) {
			log('isSet: ' + value + ' not found in map');
			return this;
		} else {
			var binaryVal = getBinary(options.map.indexOf(value));
			return (binaryVal & options.bits) > 0;
		}
	};

	/**
	* Returns an array of bit values. Length determined by map length.
	*
	* @this {autoBits}
	* @return {Array} Array of bit values.
	*/
	this.getBooleans = function() {
		var booleanArr = [];
		var bit;
		for (var i=0; i < options.map.length; i++) {
			bit = (getBinary(i) & options.bits) ? 1 : 0;
			booleanArr.push(bit);
		}
		return booleanArr;
	};

	/**
	* Returns bit integer.
	*
	* @this {autoBits}
	* @return {integer} Bit integer.
	*/
	this.getBits = function() {
		log('bits: ' + options.bits );
		return options.bits;
	};

	/**
	* Adds a bit to integer based on named value from map.
	*
	* @this {autoBits}
	* @return {integer} Returns bit integer.
	* @return {autobits} Returns autobits instance if bit already exists or not found in map.
	*/
	this.addBit = function(value) {
		if (options.map.indexOf(value) < 0) {
			log('addBits: ' + value + ' not found in map');
			return this;
		} else {
			var binaryVal = getBinary(options.map.indexOf(value));
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

	/**
	* Removes a bit from integer based on named value from map.
	*
	* @this {autoBits}
	* @return {integer} Returns bit integer.
	* @return {autobits} Returns autobits instance if bit doesn't exists or not found in map.
	*/
	this.removeBit = function(value) {
		if (options.map.indexOf(value) < 0) {
			log('removeBits: ' + value + ' not found in map');
			return this;
		} else {
			var binaryVal = getBinary(options.map.indexOf(value));
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

	/**
	* TODO: Randomizes the bits based on the map.
	*
	* @this {autoBits}
	* @return {integer} Returns bit integer.
	*/
	this.randomize = function() {
		log('randomize: ' + options.bits);
		return options.bits;
	};

	/**
	* TODO: Remaps the bits based on the bits entered.
	*
	* @this {autoBits}
	* @return {integer} Returns bit integer.
	*/
	this.remap = function() {
		log('remap: ' + options.bits);
		return options.bits;
	};

	/**
	* Clears the bit integer.
	*
	* @this {autoBits}
	* @return {integer} Returns bit integer (0).
	*/
	this.clear = function() {
		options.bits = 0;
		return options.bits;
	};


	/**
	* Gets the binary value of the named value in the map.
	*
	* @private
	* @return {integer} Returns bit value.
	*/
	var getBinary = function(value) {
		return Math.pow(2,value);
	};


	/**
	* Console log messages based on debug option.
	*
	* @private
	*/
	var log = function() {
		if (options.debug && window.console && window.console.log)
			console.log('[autobits] ', arguments);
	};

	/**
	* Extends objects to provide defaults and options.
	*
	* @private
	*/
	var extend = function(obj) {
		var args = Array.prototype.slice.call(arguments, 1);
		for (var i = 0; i < args.length;i++) {
			if (args[i]) {
				for (var prop in args[i]) {
					obj[prop] = args[i][prop];
				}
			}
		}
		return obj;
	};

	/**
	* Default configuration.
	*
	* @private
	*/
	var defaults = {
		bits: 0,
		map: [],
		debug: false
	};

	/**
	* Options passed in during instantiation.
	*
	* @private
	*/
	var options = extend({}, defaults, opts);

};