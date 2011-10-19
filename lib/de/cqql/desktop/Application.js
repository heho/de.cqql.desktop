define([
	'dojo/_base/declare'
],
function (declare) {
	/**
	 * An application
	 * 
	 * This class is an interface for applications. You have to extend it to build
	 * your own ones.
	 *
	 * @class
	 * @name de.cqql.desktop.Application
	 */
	return declare(null, {
		/**
		 * @lends de.cqql.desktop.Application
		 */
		
		/**
		 * The application's title
		 * 
		 * @type {string}
		 */
		_title: '',

		/**
		 * The applications main method
		 */
		run: function ()
		{
			
		},
		
		/**
		 * Sets the application title
		 * 
		 * @param {string} title
		 */
		setTitle: function (title)
		{
			this._title = title;
		},
		
		/**
		 * Return the application title
		 * 
		 * @return {string}
		 */
		getTitle: function ()
		{
			return this._title;
		}
	});
});
