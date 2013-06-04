AutoBits.js
=====================

Author: John Reading
Version: 1.2

A simple binary (base 2) bitwise library for javascript.

----------------------------------------

What it does:
-----------------

You can use it to send lots an lots of boolean values in a little package. You can store 31 values per instance and use in a cookie, through twitter, or in a single integer column in a database.

http://autobits.resonancemultimedia.com/ 

API:
-------

### isSet()

Returns whether or not a bit is set in an integer.



**Returns**

*Boolean*,  Bit is set.

### getBooleans()

Returns an array of bit values. Length determined by map length.



**Returns**

*Array*,  Array of bit values.

### getBits()

Returns bit integer.



**Returns**

*integer*,  Bit integer.

### addBit()

Adds a bit to integer based on named value from map.



**Returns**

*autobits*,  Returns autobits instance if bit already exists or not found in map.

### removeBit()

Removes a bit from integer based on named value from map.



**Returns**

*autobits*,  Returns autobits instance if bit doesn't exists or not found in map.

### randomize()

TODO: Randomizes the bits based on the map.



**Returns**

*integer*,  Returns bit integer.

### remap()

TODO: Remaps the bits based on the bits entered.



**Returns**

*integer*,  Returns bit integer.

### clear()

Clears the bit integer.



**Returns**

*integer*,  Returns bit value.


Thanks
-------

Rebecca Murphey

Sasha Sklar