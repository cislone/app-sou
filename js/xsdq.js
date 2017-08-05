javascript:void(function() {
	try {
		alert("xxxxxxx");
		
		var elms = document.getElementsByClassName("header");
                elms[0].parentNode.removeChild(elms[0]);
		
		var elm = document.getElementById("top_app_download");
		elm.parentNode.removeChild(elm);
		
		var elms = document.getElementsByClassName("img-banner");
                elms[0].parentNode.removeChild(elms[0]);
		
		var elms = document.getElementsByClassName("search-form");
                elms[0].parentNode.removeChild(elms[0]);
		
		var elms = document.getElementsByClassName("footer");
                elms[0].parentNode.removeChild(elms[0]);
		
		var elms = document.getElementsByClassName("public-module");
                elms[elms.length - 1].parentNode.removeChild(elms[elms.length - 1]);
		
		alert("xxxxxx2x");
	} catch(e) {
		alert(e.toString());
	}
}())
