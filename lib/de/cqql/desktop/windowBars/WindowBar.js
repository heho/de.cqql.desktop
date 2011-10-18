define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'de/cqql/desktop/windows/EventListener',
	'de/cqql/desktop/util/ObjectMap',
	'./BarItem',
	'dojo/text'
],
function (declare, dojo, ContentPane, TemplatedMixin, EventListener, ObjectMap, BarItem) {
	/**
	 * A bar which gives control over the active windows (minimize, maximize, etc.)
	 *
	 * @classs
	 * @name de.cqql.desktop.windowBars.WindowBar
	 */
	return declare([ContentPane, EventListener, TemplatedMixin], {
		/**
		 * @lends de.cqql.desktop.windowBars.WindowBar
		 */

		/**
		 * @type {de.cqql.desktop.util.ObjectMap}
		 */
		_items: null,
		
		/**
		 * The window bar's HTML template
		 * 
		 * @type {string}
		 */
		templateString: dojo.cache('de.cqql.desktop.windowBars', 'WindowBar.html'),

		/**
		 * 
		 */
		constructor: function ()
		{
			this._items = new ObjectMap();
		},

		/**
		 * Event handler
		 *
		 * @param {de.cqql.desktop.windows.Window} window The triggering window
		 */
		onRegister: function (window)
		{
			var barItem = new BarItem({
					window: window
				}
			);
			
			barItem.placeAt(this.contentNode);
			
			this._items.set(window, barItem);
		},

		/**
		 * Event handler
		 * 
		 * @param {de.cqql.desktop.windows.Window} window The triggering window
		 */
		onDestroy: function (window)
		{
			var item = this._items.get(window);
			item.destroy();
			
			this._items.remove(window);
		}
	});
});
