define([],
function () {
	/**
	 * An application
	 * 
	 * This class is an interface for applications. You have to extend it to build
	 * your own ones.
	 *
	 * @clonstructor
	 * @name de.cqql.desktop.Application
	 */
	function Application ()
	{
		/**
		 * The application's title
		 * 
		 * @type {string}
		 */
		this._title = '';
	}

	/**
	 * The applications main method
	 */
	Application.prototype.run = function ()
	{

	}
		
	/**
	 * Sets the application title
	 * 
	 * @param {string} title
	 */
	Application.prototype.setTitle = function (title)
	{
		this._title = title;
	}

	/**
	 * Return the application title
	 * 
	 * @return {string}
	 */
	Application.prototype.getTitle = function ()
	{
		return this._title;
	}
	
	return Application;
});
