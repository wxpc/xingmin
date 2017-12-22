

function goToNext() {
	var goNext = document.getElementById("goNext");
	goNext.setAttribute("style","transform: translate3d(0px, -100%, 0px); transition-duration: 300ms");
	var scolor = document.getElementById("scolor");
	var span1 = scolor.getElementsByTagName("span");
	// var span2 = span1.getElementsByClassName("swiper-pagination-bullet-active");
	span2.setAttribute("background","#d8d8d8");
}

function goToNext1() {
	var goNext = document.getElementById("goNext");
	goNext.setAttribute("style","transform: translate3d(0px, -200%, 0px); transition-duration: 300ms");
}

function goToNext2() {
	var goNext = document.getElementById("goNext");
	goNext.setAttribute("style","transform: translate3d(0px, -300%, 0px); transition-duration: 300ms");
}

function goToNext3() {
	var goNext = document.getElementById("goNext");
	goNext.setAttribute("style","transform: translate3d(0px, -400%, 0px); transition-duration: 300ms");
}

