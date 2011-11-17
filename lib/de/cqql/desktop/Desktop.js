define([
	'de/cqql/desktop/WindowManager',
	'de/cqql/desktop/windowBars/WindowBar',
	'de/cqql/desktop/appmenu/AppMenu',
	'de/cqql/desktop/Config'
],
function (WindowManager, WindowBar, AppMenu, Config) {
	/**
	 * The desktop
	 *
	 * @constructor
	 * @param {DomNode} rootNode The desktop's root node
	 * @name de.cqql.desktop.Desktop
	 */
	function Desktop (rootNode)
	{
		/**
		 * App menu
		 *
		 * @type de.cqql.desktop.menu.AppMenu
		 */
		this._appMenu = null;

		/**
		 * Window manager
		 *
		 * @type de.cqql.desktop.WindowManager
		 */
		this._windowManager = null;

		/**
		 * Root node
		 *
		 * @type DomNode
		 */
		this._rootNode = null;

		/**
		 * Window bar
		 *
		 * @type de.cqql.desktop.WindowBar
		 */
		this._windowBar = null;
		
		/**
		 * The desktop config
		 * 
		 * @type de.cqql.desktop.Config
		 */
		this._config = null;
		
		this.setRootNode(rootNode);
	}

	/**
	 * Sets the root node
	 * 
	 * @param {DomNode} rootNode The desktop's root node
	 */
	Desktop.prototype.setRootNode = function (rootNode)
	{
		this._rootNode = rootNode;
	},

	/**
	 * Returns the root node
	 * 
	 * @return {DomNode}
	 */
	Desktop.prototype.getRootNode = function ()
	{
		return this._rootNode;
	}

	/**
	 * Sets the app menu
	 *
	 * @param {de.cqql.desktop.menu.AppMenu} appMenu 
	 */
	Desktop.prototype.setAppMenu = function (appMenu)
	{
		this._appMenu = appMenu;
	}

	/**
	 * Returns the app menu
	 * 
	 * If no app menu has been previously set, this method will instantiate an
	 * de.cqql.desktop.menu.AppMenu.
	 * 
	 * @return {de.cqql.desktop.menu.AppMenu}
	 */
	Desktop.prototype.getAppMenu = function ()
	{
		if (this._appMenu == null)
		{
			var appMenu = new AppMenu();
			appMenu.placeAt(this.getRootNode());

			this.setAppMenu(appMenu);
		}

		return this._appMenu;
	}

	/**
	 * Sets the window manager
	 * 
	 * @param {de.cqql.desktop.WindowManager} windowManager
	 */
	Desktop.prototype.setWindowManager = function (windowManager)
	{
		this._windowManager = windowManager;
	}

	/**
	 * Returns the window manager
	 * 
	 * If no window manager has been previously set, this method will
	 * instantiate a de.cqql.desktop.WindowManager.
	 * 
	 * @return {de.cqql.desktop.WindowManager}
	 */
	Desktop.prototype.getWindowManager = function ()
	{
		if (this._windowManager == null)
		{
			this.setWindowManager(
				new WindowManager(
					this.getRootNode(),
					this.getWindowBar(),
					this.getConfig()
				)
			);
		}

		return this._windowManager;
	}

	/**
	 * Sets the window bar
	 * 
	 * @param {de.cqql.desktop.WindowBar}  windowBar
	 */
	Desktop.prototype.setWindowBar = function (windowBar)
	{
		this._windowBar = windowBar;
	}

	/**
	 * Returns the window bar
	 * 
	 * If no window bar has been previously set, this method will
	 * instantiate a de.cqql.desktop.WindowBar.
	 * 
	 * @return {de.cqql.desktop.WindowBar}
	 */
	Desktop.prototype.getWindowBar = function ()
	{
		if (this._windowBar == null)
		{
			var windowBar = new WindowBar();
			windowBar.placeAt(this.getRootNode());

			this.setWindowBar(windowBar);
		}

		return this._windowBar;
	},

	/**
	 * Returns the project config
	 * 
	 * @return {de.cqql.desktop.Config}
	 */
	Desktop.prototype.getConfig = function ()
	{
		if (this._config === null)
		{
			this.setConfig(new Config());
		}

		return this._config;
	},

	/**
	 * Sets the project config
	 * 
	 * @param {de.cqql.desktop.Config} config
	 */
	Desktop.prototype.setConfig = function (config)
	{
		this._config = config;
	},

	/**
	 * Runs the desktop
	 */
	Desktop.prototype.run = function ()
	{
		this.getWindowManager();
		this.getAppMenu();
	}
	
	return Desktop;
});
