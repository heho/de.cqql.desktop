require([
	'dojo/_base/kernel',
	'de/cqql/desktop/Desktop',
	'example/TestApp'
],
function (dojo, Desktop, TestApp) {
	var desktop = new Desktop(dojo.body());
	
	desktop.getConfig().setBasePath('/examples');
	
	desktop.run();
	
	var window = desktop.getWindowManager().createWindow();
	var window2 = desktop.getWindowManager().createWindow();
	window.setTitle("test");
	
	var app = new TestApp();
	
	desktop.getAppMenu().addApp(app);
});
