dojo.provide('de.cqql.desktop.menu.AppMenu');

/**
 * @class
 * @name de.cqql.desktop.menu.AppMenu
 */
dojo.declare('de.cqql.desktop.menu.AppMenu', null, {
	/**
	 * @lends de.cqql.desktop.menu.AppMenu
	 */
	
	_menuItems: null,
	
	/**
	 * @constructs
	 */
	constructor: function ()
	{
		this._menuItems = [];
	},
	
	addMenuItem: function (menuItem)
	{
		this._menuItems.push(menuItem);
	},
	
	getMenuItems: function ()
	{
		return this._menuItems;
	}
});
