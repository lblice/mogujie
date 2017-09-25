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

//time
function time(){
	
 	var nowDate = new Date();
 	var futDate = new Date('2017,12,13');
 	var leftTime = futDate.getTime()-nowDate.getTime();
 	var h = parseInt(leftTime / 1000 / 60 / 60 % 24);
 	var min = parseInt(leftTime / 1000 / 60 % 60);
 	var sec = parseInt(leftTime / 1000 % 60);
	document.getElementById('hours').innerHTML = add0(h);
	document.getElementById('minutes').innerHTML = add0(min);
	document.getElementById('seconds').innerHTML = add0(sec);
 }
setInterval(time,1000)
function add0(num){
	if(num<10){
		return '0' + num
	} else{
		return num 
	}
}

var curIndex = 0;
var timeInterval=5000;
var arr = new Array();
arr[0] = '1d.png';
arr[1] = '2l.png';
arr[2] = 'kh.png';
arr[3] = '3f.png';
arr[4] = '4f.png';
setInterval(changeImg,timeInterval);
function changeImg(){
	var toppic = document.getElementById('toppic');
	if(curIndex==arr.length-1){
		curIndex=0;
	}else{
		curIndex+=1;
	}
	toppic.src='img/'+arr[curIndex];
}