dojo.provide('de.cqql.desktop.WindowBar');

dojo.require('de.cqql.desktop.windows.EventListener');

dojo.require('de.cqql.desktop.util.ObjectMap');

/**
 * A bar which gives control over the active windows (minimize, maximize, etc.)
 *
 * @class
 * @name de.cqql.desktop.WindowBar
 */
dojo.declare('de.cqql.desktop.WindowBar', de.cqql.desktop.windows.EventListener, {
	/**
	 * @lends de.cqql.desktop.WindowBar
	 */
	
	/**
	 * @type {de.cqql.desktop.util.ObjectMap}
	 */
	_windows: null,
	
	/**
	 * 
	 */
	constructor: function ()
	{
		this._windows = new de.cqql.desktop.util.ObjectMap();
	},
	
	/**
	 * Event handler
	 *
	 * @param {de.cqql.desktop.windows.Window} window The triggering window
	 */
	onRegister: function (window)
	{
		this._windows.set(window, 'x');
	},
	
	/**
	 * Event handler
	 * 
	 * @param {de.cqql.desktop.windows.Window} window The triggering window
	 */
	onMinimize: function (window)
	{
		
	}
});
