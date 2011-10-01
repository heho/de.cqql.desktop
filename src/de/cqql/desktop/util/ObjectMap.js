dojo.provide('de.cqql.desktop.util.ObjectMap');

dojo.require('de.cqql.desktop.util.KeyNotFoundException');

/**
 * @class
 * @name de.cqql.desktop.util.ObjectMap
 */
dojo.declare('de.cqql.desktop.util.ObjectMap', null, {
	/**
	 * @lends de.cqql.desktop.util.ObjectMap
	 */
	
	_keyValuePairs: null,
	
	/**
	 * @constructs
	 */
	constructor: function ()
	{
		this._keyValuePairs = [];
	},
	
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
	
	get: function (key)
	{
		return this._findPairByKey(key).value;
	},
	
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
		
		throw new de.cqql.desktop.util.KeyNotFoundException();
	}
});