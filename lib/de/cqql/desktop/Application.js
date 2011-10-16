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
		 * The applications main method
		 */
		run: function ()
		{

		}
	});
});
