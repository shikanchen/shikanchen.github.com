function IsMobile() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
				"SymbianOS", "Windows Phone",
				"iPad", "iPod"];
	var flag = false;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = true;
			break;
		}
	}
	return flag;
}

$(function() {
	if (IsMobile()) {
		$('#style').attr('href','./stylesheets/mobile.css');
	}


    $('.resume').typed({
        strings: resume,
        typeSpeed: 1,
        cursorChar: '█',
        contentType: 'html'
    });
});