define([
	'dojo/_base/declare',
	'de/cqql/desktop/Application'
],
function (declare, Application)
{
	return declare(Application, {
		constructor: function ()
		{
			this.setTitle('m0st awsm app');
		},
		
		run: function ()
		{
			console.log('de/cqql/desktop FTW!');
		}
	});
});