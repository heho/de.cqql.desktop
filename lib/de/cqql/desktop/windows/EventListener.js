define([],
function () {
	/**
	 * Event listener interface for windows
	 *
	 * @constructor
	 * @name de.cqql.desktop.windows.EventListener
	 */
	function EventListener ()
	{
		
	}

	/**
	 * Is called when the listener is registered on a window
	 * 
	 * @param {de.cqql.desktop.windows.Window} window The triggering window
	 */
	EventListener.prototype.onRegister = function (window)
	{

	}

	/**
	 * Is called when the window becomes minimized
	 * 
	 * @param {de.cqql.desktop.windows.Window} window The triggering window
	 */
	EventListener.prototype.onMinimize = function (window)
	{

	}

	/**
	 * Is called when the window is destroyed
	 * 
	 * @param {de.cqql.desktop.windows.Window} window The triggering window
	 */
	EventListener.prototype.onDestroy = function (window)
	{

	}

	/**
	 * Is called when the window is restored
	 * 
	 * @param {de.cqql.desktop.windows.Window} window The triggering window
	 */
	EventListener.prototype.onRestore = function (window)
	{

	}

	/**
	 * Is called after title of the window changes
	 * 
	 * @param {de.cqql.desktop.windows.Window] windiw The triggering window
	 */
	EventListener.prototype.onChangeTitle = function (window)
	{

	}
	
	return EventListener;
});