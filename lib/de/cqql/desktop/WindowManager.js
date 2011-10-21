define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'de/cqql/desktop/windows/Window'
],
function (declare, ContentPane, Window) {
	/**
	 * Manages windows (instantiation etc.)
	 *
	 * @class
	 * @name de.cqql.desktop.WindowManager
	 */
	return declare(null, {
		/**
		 * @lends de.cqql.desktop.WindowManager
		 */

		/**
		 * The root node for the drawing pane of the windows
		 *
		 * @type {DomNode}
		 */
		_rootNode: null,

		/**
		 * The drawing pane of the windows
		 *
		 * @type {dijit.layout.ContentPane}
		 */
		_windowPane: null,

		/**
		 * The window bar which will be injected into the newly created windows
		 * 
		 * @type {de.cqql.desktop.WindowBar}
		 */
		_windowBar: null,
		
		/**
		 * The project config
		 * 
		 * @type de.cqql.desktop.Config
		 */
		_config: null,

		/**
		 * @param {DomNode} rootNode
		 * @param {de.cqql.desktop.WindowBar} windowBar
		 */
		constructor: function (rootNode, windowBar, config)
		{
			this.setWindowBar(windowBar);
			this.setRootNode(rootNode);
			this.getWindowPane().placeAt(rootNode);
			
			this.setConfig(config);
		},

		/**
		 * Sets the root node
		 * 
		 * @param {DomNode} rootNode
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
		 * Sets the window pane
		 * 
		 * @param {dijit.layout.ContentPane} windowPane
		 */
		setWindowPane: function (windowPane)
		{
			this._windowPane = windowPane;
		},

		/**
		 * Returns the window pane
		 * 
		 * If no window pane has been set, this method will instantiate a
		 * dijit.layout.ContentPane.
		 * 
		 * @return {dijit.layout.ContentPane}
		 */
		getWindowPane: function ()
		{
			if (this._windowPane == null)
			{
				this.setWindowPane(new ContentPane());
			}

			return this._windowPane;
		},

		/**
		 * Sets the window bar
		 * 
		 * @param {de.cqql.desktop.WindowBar} windowBar
		 */
		setWindowBar: function (windowBar)
		{
			this._windowBar = windowBar;
		},

		/**
		 * Returns the window bar
		 * 
		 * @return {de.cqql.desktop.WindowBar}
		 */
		getWindowBar: function ()
		{
			return this._windowBar;
		},
		
		/**
		 * Returns the project config
		 * 
		 * @return {de.cqql.desktop.Config}
		 */
		getConfig: function ()
		{
			return this._config;
		},
		
		/**
		 * Sets the project config
		 * 
		 * @param {de.cqql.desktop.Config} config
		 */
		setConfig: function (config)
		{
			this._config = config;
		},

		/**
		 * Creates a new, fully initialized window
		 * 
		 * @return {de.cqql.desktop.windows.Window}
		 */
		createWindow: function ()
		{
			var window = new Window(
				{
					windowManager: this,
					config: this.getConfig()
				}
			);

			window.placeAt(this.getWindowPane().containerNode);

			window.addEventListener(this.getWindowBar());

			return window;
		}
	});
});