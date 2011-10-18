define([
	'dojo/_base/declare',
	'de/cqql/desktop/util/KeyNotFoundException'
],
function (declare, KeyNotFoundException) {
	/**
	 * A very simple object map implementation to bind values to an object instead of
	 * a scalar type.
	 *
	 * @class
	 * @name de.cqql.desktop.util.ObjectMap
	 */
	return declare(null, {
		/**
		 * @lends de.cqql.desktop.util.ObjectMap
		 */

		/**
		 * Key value pairs
		 * 
		 * @type {array of objects}
		 */
		_keyValuePairs: null,

		/**
		 * @constructs
		 */
		constructor: function ()
		{
			this._keyValuePairs = [];
		},

		/**
		 * Sets the value bound to a key
		 * 
		 * @param {mixed} key
		 * @param {mixed} value
		 */
		set: function (key, value)
		{
			try
			{
				this._findPairByKey(key).value = value;
			}
			catch (e)
			{
				this._keyValuePairs.push({
					key: key,
					value: value
				});
			}
		},

		/**
		 * Returns the value bound to a key
		 * 
		 * @param {mixed} key
		 * @return {mixed}
		 * @throws {de.cqql.desktop.util.KeyNotFoundException} if the key is not bound
		 *		to any value
		 */
		get: function (key)
		{
			return this._findPairByKey(key).value;
		},
		
		/**
		 * Removes the value identified by key from the map
		 * 
		 * @param {mixed} key
		 */
		remove: function (key)
		{
			for (var i = 0, l = this._keyValuePairs.length; i < l; i++)
			{
				if (this._keyValuePairs[i].key == key)
				{
					delete this._keyValuePairs[i];
					return;
				}
			}
		},

		/**
		 * Returns the key-value pair related to a key
		 * 
		 * @param {mixed} key
		 * @return {object}
		 * @throws {de.cqql.desktop.util.KeyNotFoundException} if the key is not bound
		 *		to any value
		 */
		_findPairByKey: function (key)
		{
			for (var i = 0, l = this._keyValuePairs.length; i < l; i++)
			{
				var pair = this._keyValuePairs[i];

				if (pair.key == key)
				{
					return pair;
				}
			}

			throw new KeyNotFoundException();
		}
	});
});
