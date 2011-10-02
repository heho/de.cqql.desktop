dojo.provide('de.cqql.desktop.Desktop');

dojo.require('de.cqql.desktop.WindowManager');
dojo.require('de.cqql.desktop.WindowBar');

dojo.require('de.cqql.desktop.menu.AppMenu');

/**
 * The desktop
 *
 * @class
 * @name de.cqql.desktop.Desktop
 */
dojo.declare('de.cqql.desktop.Desktop', null, {
	/**
	 * @lends de.cqql.desktop.Desktop
	 */
	
	/**
	 * App menu
	 *
	 * @type de.cqql.desktop.menu.AppMenu
	 */
	_appMenu: null,
	
	/**
	 * Window manager
	 *
	 * @type de.cqql.desktop.WindowManager
	 */
	_windowManager: null,
	
	/**
	 * Root node
	 *
	 * @type DomNode
	 */
	_rootNode: null,
	
	/**
	 * Window bar
	 *
	 * @type de.cqql.desktop.WindowBar
	 */
	_windowBar: null,
	
	/**
	 * @param {DomNode} rootNode The desktop's root node
	 */
	constructor: function (rootNode)
	{
		this.setRootNode(rootNode);
	},
	
	/**
	 * Sets the root node
	 * 
	 * @param {DomNode} rootNode The desktop's root node
	 */
	setRootNode: function (rootNode)
	{
		this._rootNode = rootNode;
	},
	
	/**
	 * Returns the root node
	 * 
	 * @return {DomNode}
	 */
	getRootNode: function ()
	{
		return this._rootNode;
	},
	
	/**
	 * Sets the app menu
	 *
	 * @param {de.cqql.desktop.menu.AppMenu} appMenu 
	 */
	setAppMenu: function (appMenu)
	{
		this._appMenu = appMenu;
	},
	
	/**
	 * Returns the app menu
	 * 
	 * If no app menu has been previously set, this method will instantiate an
	 * de.cqql.desktop.menu.AppMenu.
	 * 
	 * @return {de.cqql.desktop.menu.AppMenu}
	 */
	getAppMenu: function ()
	{
		if (this._appMenu == null)
		{
			this.setAppMenu(new de.cqql.desktop.menu.AppMenu());
		}
		
		return this._appMenu;
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
	 * If no window manager has been previously set, this method will
	 * instantiate a de.cqql.desktop.WindowManager.
	 * 
	 * @return {de.cqql.desktop.WindowManager}
	 */
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
	
	/**
	 * Sets the window bar
	 * 
	 * @param {de.cqql.desktop.WindowBar}  windowBar
	 */
	setWindowBar: function (windowBar)
	{
		this._windowBar = windowBar;
	},
	
	/**
	 * Returns the window bar
	 * 
	 * If no window bar has been previously set, this method will
	 * instantiate a de.cqql.desktop.WindowBar.
	 * 
	 * @return {de.cqql.desktop.WindowBar}
	 */
	getWindowBar: function ()
	{
		if (this._windowBar == null)
		{
			this.setWindowBar(new de.cqql.desktop.WindowBar());
		}
		
		return this._windowBar;
	},
	
	/**
	 * Runs the desktop
	 */
	run: function ()
	{
		this.getWindowManager();
	}
});
