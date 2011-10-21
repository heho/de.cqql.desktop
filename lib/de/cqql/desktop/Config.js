define([
	'dojo/_base/declare'
],
function (declare) {
	/**
	 * A project config
	 * 
	 * @class
	 * @name de.cqql.desktop.Config
	 */
	return declare(null, {
		/**
		 * @lends de.cqql.desktop.Config
		 */
		
		/**
		 * The library's base path (used for images etc.)
		 * 
		 * @type {string}
		 */
		_basePath: '',
		
		/**
		 * Returns the library's base path
		 * 
		 * @return {string}
		 */
		getBasePath: function () {
			return this._basePath;
		},
		
		/**
		 * Sets the library's base path
		 * 
		 * @param {string} basePath
		 */
		setBasePath: function (basePath) {
			this._basePath = basePath;
		}
	});
});