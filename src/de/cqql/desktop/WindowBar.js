dojo.provide('de.cqql.desktop.WindowBar');

dojo.require('de.cqql.desktop.windows.EventListener');

dojo.require('de.cqql.desktop.util.ObjectMap');

/**
 * @class
 * @name de.cqql.desktop.WindowBar
 */
dojo.declare('de.cqql.desktop.WindowBar', de.cqql.desktop.windows.EventListener, {
	/**
	 * @lends de.cqql.desktop.WindowBar
	 */
	
	_windows: null,
	
	constructor: function ()
	{
		this._windows = new de.cqql.desktop.util.ObjectMap();
	},
	
	onRegister: function (window)
	{
		this._windows.set(window, 'x');
	},
	
	onMinimize: function (window)
	{
		
	}
});
