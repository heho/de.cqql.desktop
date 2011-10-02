dojo.provide('de.cqql.desktop.windows.EventListener');

/**
 * Event listener interface for windows
 *
 * @class
 * @name de.cqql.desktop.windows.EventListener
 */
dojo.declare('de.cqql.desktop.windows.EventListener', null, {
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
		
	}
});