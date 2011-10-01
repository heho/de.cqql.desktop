dojo.provide('de.cqql.desktop.WindowManager');

dojo.require('de.cqql.desktop.windows.Window');

dojo.require('dijit.layout.ContentPane');

/**
 * @class
 * @name de.cqql.desktop.WindowManager
 */
dojo.declare('de.cqql.desktop.WindowManager', null, {
	/**
	 * @lends de.cqql.desktop.WindowManager
	 */
	
	_rootNode: null,
	
	_windowPane: null,
	
	_windowBar: null,
	
	constructor: function (rootNode, windowBar)
	{
		this.setWindowBar(windowBar);
		this.setRootNode(rootNode);
		this.getWindowPane().placeAt(rootNode);
	},
	
	setRootNode: function (rootNode)
	{
		this._rootNode = rootNode;
	},
	
	getRootNode: function ()
	{
		return this._rootNode;
	},
	
	setWindowPane: function (windowPane)
	{
		this._windowPane = windowPane;
	},
	
	getWindowPane: function ()
	{
		if (this._windowPane == null)
		{
			this.setWindowPane(new dijit.layout.ContentPane());
		}
		
		return this._windowPane;
	},
	
	setWindowBar: function (windowBar)
	{
		this._windowBar = windowBar;
	},
	
	getWindowBar: function ()
	{
		return this._windowBar;
	},
	
	createWindow: function ()
	{
		var window = new de.cqql.desktop.windows.Window(
			{
				windowManager: this
			}
		);
			
		window.placeAt(this.getWindowPane().containerNode);
		
		window.addEventListener(this.getWindowBar());
			
		return window;
	}
});
