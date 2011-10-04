require([
	'dojo',
	'de/cqql/desktop/Desktop'
],
function (dojo, Desktop) {
	var desktop = new Desktop(dojo.body());
	desktop.run();
	
	var window = desktop.getWindowManager().createWindow();
});