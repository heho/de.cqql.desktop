dojo.provide('de.cqql.desktop.menu.MenuItem');

/**
 * A specific app menu entry that is reliable for it's representation and
 * and instantiating an app when it is clicked on
 *
 * @class
 * @name de.cqql.desktop.menu.MenuItem
 */
dojo.declare('de.cqql.desktop.menu.MenuItem', null, {
	/**
	 * @lends de.cqql.desktop.menu.MenuItem
	 */
	
	/**
	 * The closure that handles the onclick event
	 *
	 * @type {closure}
	 */
	_onClick: null,
	
	/**
	 * @param {closure} onClick
	 */
	constructor: function (onClick)
	{
		this.setOnClick(onClick);
	},
	
	/**
	 * Sets the onclick handler closure
	 * 
	 * @param {closure} onClick
	 */
	setOnClick: function (onClick)
	{
		this._onClick = onClick;
	},
	
	/**
	 * Returns the onclick handler closure
	 * 
	 * @return {closure}
	 */
	getOnClick: function ()
	{
		return this._onClick;
	}
});
