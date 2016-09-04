(function(){
	var webappCache = window.applicationCache;
			
	
	function updateCache()
	{
		webappCache.swapCache();
	}
	

	webappCache.addEventListener("updateready", updateCache, false);

})();