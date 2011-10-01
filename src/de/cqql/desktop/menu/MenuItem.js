dojo.provide('de.cqql.desktop.menu.MenuItem');

/**
 * @class
 * @name de.cqql.desktop.menu.MenuItem
 */
dojo.declare('de.cqql.desktop.menu.MenuItem', null, {
	/**
	 * @lends de.cqql.desktop.menu.MenuItem
	 */
	
	_onClick: null,
	
	/**
	 * @constructs
	 */
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
