javascript:void(function() {
	try {
		var elms = document.getElementsByClassName("header");
    elms[0].parentNode.removeChild(elms[0]);
	} catch(e) {}
}())
