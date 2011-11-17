define([
	'dijit/layout/ContentPane',
	'de/cqql/desktop/windows/Window'
],
function (ContentPane, Window) {
	/**
	 * Manages windows (instantiation etc.)
	 *
	 * @constructor
	 * @param {DomNode} rootNode
	 * @param {de.cqql.desktop.WindowBar} windowBar
	 * @param {de.cqql.desktop.Config} config
	 * @name de.cqql.desktop.WindowManager
	 */
	function WindowManager (rootNode, windowBar, config)
	{
		/**
		 * The root node for the drawing pane of the windows
		 *
		 * @type {DomNode}
		 */
		this._rootNode = null;

		/**
		 * The drawing pane of the windows
		 *
		 * @type {dijit.layout.ContentPane}
		 */
		this._windowPane = null;

		/**
		 * The window bar which will be injected into the newly created windows
		 * 
		 * @type {de.cqql.desktop.WindowBar}
		 */
		this._windowBar = null;
		
		/**
		 * The project config
		 * 
		 * @type de.cqql.desktop.Config
		 */
		this._config = null;
		
		/**
		 * next ZIndex for Dialog
		 * 
		 * @type {Integer}
		 */
		this._nextZIndex = 1;
		
		this.setWindowBar(windowBar);
		this.setRootNode(rootNode);
		this.getWindowPane().placeAt(rootNode);

		this.setConfig(config);
	}

	/**
	 * Sets the root node
	 * 
	 * @param {DomNode} rootNode
	 */
	WindowManager.prototype.setRootNode = function (rootNode)
	{
		this._rootNode = rootNode;
	}

	/**
	 * Returns the root node
	 * 
	 * @return {DomNode}
	 */
	WindowManager.prototype.getRootNode = function ()
	{
		return this._rootNode;
	}

	/**
	 * Sets the window pane
	 * 
	 * @param {dijit.layout.ContentPane} windowPane
	 */
	WindowManager.prototype.setWindowPane = function (windowPane)
	{
		this._windowPane = windowPane;
	}

	/**
	 * Returns the window pane
	 * 
	 * If no window pane has been set, this method will instantiate a
	 * dijit.layout.ContentPane.
	 * 
	 * @return {dijit.layout.ContentPane}
	 */
	WindowManager.prototype.getWindowPane = function ()
	{
		if (this._windowPane == null)
		{
			this.setWindowPane(new ContentPane({
				class: "windowArea",
				style: "position: absolute; padding-top: 6px;" + 
					"padding-right: 4px; padding-bottom: 0px;" + 
					"padding-left: 142px; left: 0px; top: 0px;" + 
					"right: 0px; bottom: 40px;"
			}));
		}

		return this._windowPane;
	}

	/**
	 * Sets the window bar
	 * 
	 * @param {de.cqql.desktop.WindowBar} windowBar
	 */
	WindowManager.prototype.setWindowBar = function (windowBar)
	{
		this._windowBar = windowBar;
	}

	/**
	 * Returns the window bar
	 * 
	 * @return {de.cqql.desktop.WindowBar}
	 */
	WindowManager.prototype.getWindowBar = function ()
	{
		return this._windowBar;
	}

	/**
	 * Returns the project config
	 * 
	 * @return {de.cqql.desktop.Config}
	 */
	WindowManager.prototype.getConfig = function ()
	{
		return this._config;
	}

	/**
	 * Sets the project config
	 * 
	 * @param {de.cqql.desktop.Config} config
	 */
	WindowManager.prototype.setConfig = function (config)
	{
		this._config = config;
	}

	/**
	 * Returns the nextZIndex and increases it by one
	 *
	 * @return {Integer}
	 */
	WindowManager.prototype.getZIndex = function ()
	{
		return this._nextZIndex++;
	}

	/**
	 * Creates a new, fully initialized window
	 * 
	 * @return {de.cqql.desktop.windows.Window}
	 */
	WindowManager.prototype.createWindow = function (title)
	{
		var window = new Window(
			{
				windowManager: this,
				config: this.getConfig(),
				zIndex: this._nextZIndex
			}
		);

		this._nextZIndex++;

		window.placeAt(this.getWindowPane().containerNode);

		window.addEventListener(this.getWindowBar());

		return window;
	}

	return WindowManager;
});