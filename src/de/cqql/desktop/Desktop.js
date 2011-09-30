dojo.provide('de.cqql.desktop.Desktop');

dojo.require('de.cqql.desktop.WindowManager');
dojo.require('de.cqql.desktop.WindowBar');

dojo.require('de.cqql.desktop.menu.AppMenu');

dojo.declare('de.cqql.desktop.Desktop', null, {
	_appMenu: null,
	
	_windowManager: null,
	
	_rootNode: null,
	
	_windowBar: null,
	
	constructor: function (rootNode)
	{
		this.setRootNode(rootNode);
	},
	
	setRootNode: function (rootNode)
	{
		this._rootNode = rootNode;
	},
	
	getRootNode: function ()
	{
		return this._rootNode;
	},
	
	setAppMenu: function (appMenu)
	{
		this._appMenu = appMenu;
	},
	
	getAppMenu: function ()
	{
		if (this._appMenu == null)
		{
			this.setAppMenu(new de.cqql.desktop.menu.AppMenu());
		}
		
		return this._appMenu;
	},
	
	setWindowManager: function (windowManager)
	{
		this._windowManager = windowManager;
	},
	
	getWindowManager: function ()
	{
		if (this._windowManager == null)
		{
			this.setWindowManager(
				new de.cqql.desktop.WindowManager(
					this.getRootNode(),
					this.getWindowBar()
				)
			);
		}
		
		return this._windowManager;
	},
	
	setWindowBar: function (windowBar)
	{
		this._windowBar = windowBar;
	},
	
	getWindowBar: function ()
	{
		if (this._windowBar == null)
		{
			this.setWindowBar(new de.cqql.desktop.WindowBar());
		}
		
		return this._windowBar;
	},
	
	run: function ()
	{
		this.getWindowManager();
	}
});
