define([
	'dojo'
],
function (dojo) {
	/**
	 * An application
	 * 
	 * This class is an interface for applications. You have to extend it to build
	 * your own ones.
	 *
	 * @class
	 * @name de.cqql.desktop.Application
	 */
	return dojo.declare(null, {
		/**
		 * @lends de.cqql.desktop.Application
		 */

		/**
		 * The applications main method
		 */
		run: function ()
		{

		}
	});
});
