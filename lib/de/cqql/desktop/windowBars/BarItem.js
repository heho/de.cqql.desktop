define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dojo/on',
	'de/cqql/desktop/windows/EventListener',
	'dojo/text'
],
function (declare, dojo, ContentPane, TemplatedMixin, on, EventListener) {
	/**
	 * A single item in the window bar
	 * 
	 * @class
	 * @name de.cqql.desktop.windowBars.BarItem
	 */
	return declare([ContentPane, TemplatedMixin, EventListener], {
		/**
		 * @lends de.cqql.desktop.windowBars.BarItem
		 */
		
		/**
		 * The bar items's HTML template
		 * 
		 * @type {string}
		 */
		templateString: dojo.cache('de.cqql.desktop.windowBars', 'BarItem.html'),
		
		/**
		 * The window, that this bar item is connected to
		 * 
		 * @type {de/cqql/desktop/windows/Window}
		 */
		_window: null,
		
		
		/**
		 * @param {de/cqql/desktop/windows/Window} window
		 */
		constructor: function (args, rootNode)
		{
			this._window = args.window;
			this._window.addEventListener(this);
		},
		
		/**
		 * Is called after the template was loaded
		 */
		postCreate: function ()
		{
			var that = this;
			
			on(this.buttonNode, "click", function () {
				if (that._window.isMinimized())
				{
					that._window.restore();
				}
				else
				{
					that._window.minimize();
				}
			});
			
			if (this._window.isMinimized())
			{
				this.activateMinimizedStyle();
			}
			else
			{
				this.activateNormalStyle();
			}
		},
		
		/**
		 * Event handler
		 * 
		 * @param {de/cqql/desktop/windows/Window} window
		 */
		onMinimize: function (window)
		{
			this.activateMinimizedStyle();
		},
		
		/**
		 * Event handler
		 * 
		 * @param {de/cqql/desktop/windows/Window} window
		 */
		onRestore: function (window)
		{
			this.activateNormalStyle();
		},
		
		onChangeTitle: function (window)
		{
			this.buttonNode.value = window.getTitle();	
		},
		
		/**
		 * Activates the style that is associated with a minimized window
		 */
		activateMinimizedStyle: function ()
		{
			// TODO: Add some cool effects for a minimized window button
			this.buttonNode.style.backgroundColor = '#cfcfcf';
			this.buttonNode.style.color = '#808080';
		},
		
		/**
		 * Activates the style that is associated with a window in a normal state (restored, maximized)
		 */
		activateNormalStyle: function ()
		{
			// TODO: Add some cool effects for a normal window button
			this.buttonNode.style.background = '#ffffff';
			this.buttonNode.style.color = '#243C5F';
		}
	});
});