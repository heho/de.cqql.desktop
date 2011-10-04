define([
	'dojo',
	'de/cqql/desktop/WindowBar',
	'de/cqql/desktop/windows/EventListener',
	'de/cqql/desktop/util/ObjectMap'
],
function (dojo, WindowBar, EventListener, ObjectMap) {
	/**
	 * A bar which gives control over the active windows (minimize, maximize, etc.)
	 *
	 * @classs
	 * @name de.cqql.desktop.WindowBar
	 */
	return dojo.declare(EventListener, {
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
			this._windows = new ObjectMap();
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
});
