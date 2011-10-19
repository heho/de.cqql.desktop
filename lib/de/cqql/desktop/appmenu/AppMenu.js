define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'de/cqql/desktop/appmenu/MenuItem',
	'dojo/text'
],
function (declare, dojo, ContentPane, TemplatedMixin, MenuItem) {
	/**
	 * A menu that holds entries for every registered application
	 *
	 * @class
	 * @name de.cqql.desktop.appmenu.AppMenu
	 */
	return declare([ContentPane, TemplatedMixin], {
		/**
		 * @lends de.cqql.desktop.appmenu.AppMenu
		 */

		/**
		 * All added menu items
		 *
		 * @type {array of de.cqql.desktop.appmenu.MenuItem}
		 */
		_menuItems: null,
		
		/**
		 * The app menu's HTML template
		 * 
		 * @type {string}
		 */
		templateString: dojo.cache('de.cqql.desktop.appmenu', 'AppMenu.html'),

		/**
		 * 
		 */
		constructor: function ()
		{
			this._menuItems = [];
		},

		/**
		 * Adds a menu item
		 * 
		 * @param {de.cqql.desktop.appmenu.MenuItem} menuItem
		 */
		addMenuItem: function (menuItem)
		{
			this._menuItems.push(menuItem);
			
			menuItem.placeAt(this.menuNode);
		},

		/**
		 * Returns all registered menu items
		 * 
		 * @return {array of de.cqql.desktop.appmenu.MenuItem}
		 */
		getMenuItems: function ()
		{
			return this._menuItems;
		},
		
		/**
		 * This is a shorthand to add a new menu item for an application
		 * 
		 * @param {de/cqql/desktop/Application} app
		 */
		addApp: function (app)
		{
			var menuItem = new MenuItem({
				app: app
			});
			
			this.addMenuItem(menuItem);
		}
	});
});
