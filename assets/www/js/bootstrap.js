(function() {
  var device_ready = false;
  var jqm_mobile_init = false;

  var initApp = function() {
    if (device_ready && jqm_mobile_init) {
      start_app();
    }
  };

  var onDeviceReady = function() {
    device_ready = true;
		console.log('device ready');
    //alert('dev ready');
    initApp();
		
		//makes bar at bottom blink to indicate device is ready
		var parentElement = document.getElementById('deviceready');
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');
  };

  var onMobileInit = function() {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    jqm_mobile_init = true;
    //alert('jqm ready');
		console.log('jqm ready');
    initApp();
  };

  $(document).bind('mobileinit', onMobileInit);
  document.addEventListener("deviceready", onDeviceReady, false);
})();
