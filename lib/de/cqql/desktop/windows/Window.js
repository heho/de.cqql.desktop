define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/_TemplatedMixin',
	'dijit/layout/ContentPane',
	'dojo/dom-geometry',
	'dojo/dnd/Moveable',
	'dojo/dnd/move',
	'dojo/text'
],
function (declare, dojo, TemplatedMixin, ContentPane, domGeometry, Moveable, move) {
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
		templateString: dojo.cache('de.cqql.desktop.windows', 'Window.html'),

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
		 * The desktop config
		 * 
		 * @type de.cqql.desktop.Config
		 */
		_config: null,
		
		/**
		 * minimization State
		 * 
		 * @type {Boolean}
		 */
		_minimized: false,
		
		/**
		 * maximization State
		 * 
		 * @type {Boolean}
		 */
		_maximized: false,
		
		/**
		 * data storage
		 * stores the position and size of window when window is not visible
		 * 
		 * @type {Object}
		 */
		_store: {
			left: 0, 
			top: 0, 
			height: 0, 
			width: 0
		},

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
			this.setConfig(args.config);
		},
		
		/**
		 * Called just after the creation of the domNode
		 * Applies the movability and the style
		 */
		postCreate: function()
		{
			this._moveable = new move.parentConstrainedMoveable(
				this.domNode, 
				{ 
					area: "content",
					within: true,
					handle: this.titleBar//,
					//mover: new nonAlteringMover()
				});
				
			//this.connect(this._moveable, "onMoveStart", "_startDrag");	
				
			this.domNode.style.position = "fixed !important";
			this.minimizeButtonNode.style.backgroundImage = 
				"url(\"" + 
				this._config.getBasePath() + 
				"/images/spriteRoundedIconsSmall.gif\")";
			
			this.maximizeButtonNode.style.backgroundImage = 
				"url(\"" + 
				this._config.getBasePath() + 
				"/images/spriteRoundedIconsSmall.gif\")";
			
			this.closeButtonNode.style.backgroundImage = 
				"url(\"" + 
				this._config.getBasePath() + 
				"/images/spriteRoundedIconsSmall.gif\")";
			
			this.titleBar.style.backgroundImage =
				"url(\"" + 
				this._config.getBasePath() + 
				"/images/titleBar.png\")";
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

			eventListener.onRegister(this);
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
			this.titleNode.innerHTML = title;
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
				
			this.windowNode.style.display = "none";
			this._minimized = true;
		},
		
		/**
		 * Maximizes the window
		 */
		maximize: function ()
		{			
			if(this.isMaximized())
			{
				this.windowNode.style.left = this._store.left;
				this.windowNode.style.top = this._store.top;
				this.windowNode.style.height = this._store.height;
				this.windowNode.style.width = this._store.width;
				
				this._moveable = new move.parentConstrainedMoveable(
				this.domNode, 
				{ 
					area: "border",
					within: true,
					handle: this.titleBar
				});
				
				this.domNode.style.position = "fixed !important";
				this._maximized = false;
				
				return;
			}
			
			this._store.left = this.windowNode.style.left;
			this._store.top = this.windowNode.style.top;
			this._store.height = this.windowNode.style.height;
			this._store.width = this.windowNode.style.width;
			
			this.windowNode.style.position = "absolute !important";
			this.windowNode.style.left = "0px";
			this.windowNode.style.top = "0px";
			this.windowNode.style.height = "100%";
			this.windowNode.style.width = "100%";
			this._moveable.destroy();
			
			this._maximized = true;
		},
		
		/**
		 * returns minimization state
		 * 
		 * @return {boolean}
		 */
		isMinimized: function ()
		{
			return this._minimized;
		},
		
		/**
		 * returns minimization state
		 * 
		 * @return {boolean}
		 */
		isMaximized: function ()
		{
			return this._maximized;
		},
		
		/**
		 * Restores the window to normal state
		 */
		restore: function ()
		{
			this.getEventListeners().forEach(
				function (listener)
				{
					listener.onRestore(this);
				},
				this
			);
			
			this.windowNode.style.display = "block";
			this._minimized = false;
		},
		
		/**
		 *	Called after dragging the window
		 */
		_startDrag: function()
		{
			this.domNode.style.position = "fixed !important";
		},
		
		/**
		 * Destroys the window
		 */
		destroy: function ()
		{
			this.getEventListeners().forEach(
				function (listener)
				{
					listener.onDestroy(this);
				},
				this
			);
			
			this._moveable.destroy();
			dojo.empty(this.domNode);
			this.domNode.parentNode.removeChild(this.domNode);
			
			this.inherited(arguments);
		}
	});
});
