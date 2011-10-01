dojo.provide('de.cqql.desktop.windows.Window');

dojo.require('dojo.cache');

dojo.require('dijit._Templated');
dojo.require('dijit.layout.ContentPane');

/**
 * @class
 * @name de.cqql.desktop.windows.Window
 */
dojo.declare('de.cqql.desktop.windows.Window', [dijit.layout.ContentPane, dijit._Templated], {
	/**
	 * @lends de.cqql.desktop.windows.Window
	 */
	
	_windowManager: null,
	
	templateString: dojo.cache('de.cqql.desktop.windows', 'template.html'),
	
	_eventListeners: null,
	
	_title: '',
	
	/**
	 * @constructs
	 */
	constructor: function (args, rootNode)
	{
		this._eventListeners = [];
		
		this.setWindowManager(args.windowManager);
	},
	
	setWindowManager: function (windowManager)
	{
		this._windowManager = windowManager;
	},
	
	getWindowManager: function ()
	{
		return this._windowManager;
	},
	
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
	
	getEventListeners: function ()
	{
		return this._eventListeners;
	},
	
	setTitle: function (title)
	{
		this._title = title;
	},
	
	getTitle: function ()
	{
		return this._title;
	},
	
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
