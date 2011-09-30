dojo.provide('de.cqql.desktop.menu.MenuItem');

dojo.declare('de.cqql.desktop.menu.MenuItem', null, {
	_onClick: null,
	
	constructor: function (onClick)
	{
		this.setOnClick(onClick);
	},
	
	setOnClick: function (onClick)
	{
		this._onClick = onClick;
	},
	
	getOnClick: function ()
	{
		return this._onClick;
	}
});
