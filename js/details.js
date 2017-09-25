!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));

// windonw.onscroll

window.onscroll = function(){
	var obj3 = document.getElementById('rapid3');
	scrollTop = document.documentElement.scrollTop||window.pageYoffset||document.body.scrollTop;
	obj3.style.display=(scrollTop >= 1500)?'block':'none';
}