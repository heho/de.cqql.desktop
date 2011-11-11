define([
	'dojo/_base/declare'
],
function (declare) {
	/**
	 * Event listener interface for windows
	 *
	 * @class
	 * @name de.cqql.desktop.windows.EventListener
	 */
	return declare(null, {
		/**
		 * @lends de.cqql.desktop.windows.EventListener
		 */

		/**
		 * Is called when the listener is registered on a window
		 * 
		 * @param {de.cqql.desktop.windows.Window} window The triggering window
		 */
		onRegister: function (window)
		{

		},

		/**
		 * Is called when the window becomes minimized
		 * 
		 * @param {de.cqql.desktop.windows.Window} window The triggering window
		 */
		onMinimize: function (window)
		{

		},
		
		/**
		 * Is called when the window is destroyed
		 * 
		 * @param {de.cqql.desktop.windows.Window} window The triggering window
		 */
		onDestroy: function (window)
		{

		},
		
		/**
		 * Is called when the window is restored
		 * 
		 * @param {de.cqql.desktop.windows.Window} window The triggering window
		 */
		onRestore: function (window)
		{

		},
		
		/**
		 * Is called after title of the window changes
		 * 
		 * @param {de.cqql.desktop.windows.Window] windiw The triggering window
		 */
		onChangeTitle: function (window)
		{
			
		}
	});
});