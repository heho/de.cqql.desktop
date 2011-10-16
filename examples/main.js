require([
	'dojo/_base/kernel',
	'de/cqql/desktop/Desktop'
],
function (dojo, Desktop) {
	var desktop = new Desktop(dojo.body());
	desktop.run();
	
	var window = desktop.getWindowManager().createWindow();
});