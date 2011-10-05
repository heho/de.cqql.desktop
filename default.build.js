({
	appDir: "lib",
	baseUrl: "./",
	dir: "build",
	packages: [
		{
			name: 'dojo',
			location: '../deps/dojo',
			main: 'lib/main-browser'
		},
		{
			name: 'dijit',
			location: '../deps/dijit',
			main: 'lib/main'
		}
	]
})