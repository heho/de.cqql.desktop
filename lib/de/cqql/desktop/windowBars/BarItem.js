define([
	'dojo/_base/declare',
	'dojo/_base/kernel',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dojo/text'
],
function (declare, dojo, ContentPane, TemplatedMixin) {
	/**
	 * A singe item in the window bar
	 * 
	 * @class
	 * @name de.cqql.desktop.windowBars.BarItem
	 */
	return declare([ContentPane, TemplatedMixin], {
		/**
		 * @lends de.cqql.desktop.windowBars.BarItem
		 */
		
		/**
		 * The bar items's HTML template
		 * 
		 * @type {string}
		 */
		templateString: dojo.cache('de.cqql.desktop.windowBars', 'BarItem.html'),
	});
});