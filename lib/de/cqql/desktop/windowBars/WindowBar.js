define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'de/cqql/desktop/windows/EventListener',
	'de/cqql/desktop/util/ObjectMap',
	'dojo/text'
],
function (declare, dojo, ContentPane, TemplatedMixin, EventListener, ObjectMap) {
	/**
	 * A bar which gives control over the active windows (minimize, maximize, etc.)
	 *
	 * @classs
	 * @name de.cqql.desktop.WindowBar
	 */
	return declare([ContentPane, EventListener, TemplatedMixin], {
		/**
		 * @lends de.cqql.desktop.WindowBar
		 */

		/**
		 * @type {de.cqql.desktop.util.ObjectMap}
		 */
		_windows: null,
		
		/**
		 * The window's HTML template
		 * 
		 * @type {string}
		 */
		templateString: dojo.cache('de.cqql.desktop.windowBars', 'WindowBar.html'),

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
