define([],
function () {
	/**
	 * A project config
	 * 
	 * @constructor
	 * @name de.cqql.desktop.Config
	 */
	function Config ()
	{
		/**
		 * The library's base path (used for images etc.)
		 * 
		 * @type {string}
		 */
		this._basePath = '';
	}

	/**
	 * Returns the library's base path
	 * 
	 * @return {string}
	 */
	Config.prototype.getBasePath = function ()
	{
		return this._basePath;
	}

	/**
	 * Sets the library's base path
	 * 
	 * @param {string} basePath
	 */
	Config.prototype.setBasePath = function (basePath)
	{
		this._basePath = basePath;
	}
	
	return Config;
});