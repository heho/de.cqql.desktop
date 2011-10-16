define([
	'dojo/_base/declare'
],
function (declare) {
	/**
	 * A menu that holds entries for every registered application
	 *
	 * @class
	 * @name de.cqql.desktop.menu.AppMenu
	 */
	return declare(null, {
		/**
		 * @lends de.cqql.desktop.menu.AppMenu
		 */

		/**
		 * All added menu items
		 *
		 * @type {array of de.cqql.desktop.menu.MenuItem}
		 */
		_menuItems: null,

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
		 * @param {de.cqql.desktop.menu.MenuItem} menuItem
		 */
		addMenuItem: function (menuItem)
		{
			this._menuItems.push(menuItem);
		},

		/**
		 * Returns all registered menu items
		 * 
		 * @return {array of de.cqql.desktop.menu.MenuItem}
		 */
		getMenuItems: function ()
		{
			return this._menuItems;
		}
	});
});
