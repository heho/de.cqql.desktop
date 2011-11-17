define([
	'de/cqql/desktop/util/KeyNotFoundException'
],
function (KeyNotFoundException) {
	/**
	 * A very simple object map implementation to bind values to an object instead of
	 * a scalar type.
	 *
	 * @constructor
	 * @name de.cqql.desktop.util.ObjectMap
	 */
	function ObjectMap ()
	{
		
		/**
		 * Key value pairs
		 * 
		 * @type {array of objects}
		 */
		this._keyValuePairs = [];
	}

	/**
	 * Sets the value bound to a key
	 * 
	 * @param {mixed} key
	 * @param {mixed} value
	 */
	ObjectMap.prototype.set = function (key, value)
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
	}

	/**
	 * Returns the value bound to a key
	 * 
	 * @param {mixed} key
	 * @return {mixed}
	 * @throws {de.cqql.desktop.util.KeyNotFoundException} if the key is not bound
	 *		to any value
	 */
	ObjectMap.prototype.get = function (key)
	{
		return this._findPairByKey(key).value;
	}
		
	/**
	 * Removes the value identified by key from the map
	 * 
	 * @param {mixed} key
	 */
	ObjectMap.prototype.remove = function (key)
	{
		for (var i = 0, l = this._keyValuePairs.length; i < l; i++)
		{
			if (this._keyValuePairs[i].key == key)
			{
				this._keyValuePairs.splice[i, i];
				return;
			}
		}
	}

	/**
	 * Returns the key-value pair related to a key
	 * 
	 * @param {mixed} key
	 * @return {object}
	 * @throws {de.cqql.desktop.util.KeyNotFoundException} if the key is not bound
	 *		to any value
	 */
	ObjectMap.prototype._findPairByKey = function (key)
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
	
	return ObjectMap;
});
