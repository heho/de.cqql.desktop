dojo.provide('de.cqql.desktop.menu.AppMenu');

dojo.declare('de.cqql.desktop.menu.AppMenu', null, {
	_menuItems: null,
	
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
