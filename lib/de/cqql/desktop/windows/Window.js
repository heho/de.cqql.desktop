define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/_TemplatedMixin',
	'dijit/layout/ContentPane',
	'dojo/text'
],
function (declare, dojo, TemplatedMixin, ContentPane) {
	/**
	 * A window
	 *
	 * @class
	 * @name de.cqql.desktop.windows.Window
	 */
	return declare([ContentPane, TemplatedMixin], {
		/**
		 * @lends de.cqql.desktop.windows.Window
		 */

		/**
		 * Window manager
		 *
		 * @type {de.cqql.desktop.WindowManager}
		 */
		_windowManager: null,

		/**
		 * The window's HTML template
		 * 
		 * @type {string}
		 */
		templateString: dojo.cache('de.cqql.desktop.windows', 'template.html'),

		/**
		 * Registered event listeners
		 * 
		 * @type {array of de.cqql.desktop.windows.EventListener}
		 */
		_eventListeners: null,

		/**
		 * The windows title
		 * 
		 * @type {string}
		 */
		_title: '',

		/**
		 * The args object may have all the keys that any dijit.layout.ContentPane
		 * args-object may have plus the following:
		 * - windowManager: The window's manager
		 *
		 * @param {object} args An argument container (dojo-style)
		 * @param {DomNode} rootNode
		 */
		constructor: function (args, rootNode)
		{
			this._eventListeners = [];

			this.setWindowManager(args.windowManager);
		},

		/**
		 * Sets the window manager
		 * 
		 * @param {de.cqql.desktop.WindowManager} windowManager
		 */
		setWindowManager: function (windowManager)
		{
			this._windowManager = windowManager;
		},

		/**
		 * Returns the window manager
		 * 
		 * @return {de.cqql.desktop.WindowManager}
		 */
		getWindowManager: function ()
		{
			return this._windowManager;
		},

		/**
		 * Registers an event listener
		 * 
		 * @param {de.cqql.desktop.windows.EventListener} eventListener
		 */
		addEventListener: function (eventListener)
		{
			this._eventListeners.push(eventListener);

			this.getEventListeners().forEach(
				function (listener)
				{
					listener.onRegister(this);
				},
				this
			);
		},

		/**
		 * Returns all registered event listeners
		 * 
		 * @return {array of de.cqql.desktop.windows.EventListener}
		 */
		getEventListeners: function ()
		{
			return this._eventListeners;
		},

		/**
		 * Sets the title
		 * 
		 * @param {string} title
		 */
		setTitle: function (title)
		{
			this._title = title;
		},

		/**
		 * Returns the title
		 * 
		 * @return {string}
		 */
		getTitle: function ()
		{
			return this._title;
		},

		/**
		 * Minimizes the window
		 */
		minimize: function ()
		{
			this.getEventListeners().forEach(
				function (listener)
				{
					listener.onMinimize(this);
				},
				this
			);
		}
	});
});
