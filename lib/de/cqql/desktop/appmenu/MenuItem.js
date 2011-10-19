define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dojo/on',
	'dojo/text'
],
function (declare, dojo, ContentPane, TemplatedMixin, on) {
	/**
	 * A specific app menu item that is reliable for it's representation and
	 * and running an app when it is clicked on
	 *
	 * @class
	 * @name de.cqql.desktop.appmenu.MenuItem
	 */
	return declare([ContentPane, TemplatedMixin], {
		/**
		 * @lends de.cqql.desktop.appmenu.MenuItem
		 */
		
		/**
		 * The application that will be run, when this item is clicked
		 * 
		 * @type {de/cqql/desktop/Application}
		 */
		_app: null,
		
		/**
		 * The app menu's HTML template
		 * 
		 * @type {string}
		 */
		templateString: dojo.cache('de.cqql.desktop.appmenu', 'MenuItem.html'),

		/**
		 * @param {closure} onClick
		 */
		constructor: function (args)
		{
			this.setApp(args.app);
		},
		
		/**
		 * Is called after the template has been loaded
		 */
		postCreate: function ()
		{
			var that = this;
			
			on(this.itemNode, 'click', function () {
				that.getApp().run();
			});
			
			this.itemNode.value = this.getApp().getTitle();
		},

		/**
		 * Sets the app that is run when this item is clicked
		 * 
		 * @param {de/cqql/desktop/Application} app
		 */
		setApp: function (app)
		{
			this._app = app;
		},

		/**
		 * Returns the app that is run when this item is clicked
		 * 
		 * @return {de/cqql/desktop/Application}
		 */
		getApp: function ()
		{
			return this._app;
		}
	});
});