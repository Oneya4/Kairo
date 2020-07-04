/*toggle menu*/
function myFunction(x) {
  x.classList.toggle("change");
}

const selectElement = function (element) {
	return document.querySelector (element);
};

let menuToggler = selectElement('.menu');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
	body.classList.toggle('open');

});

window.onscroll = function() {myScroll()};
function myScroll(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	if (winScroll > 100) {
		document.getElementById("menu-opacity").style.opacity = 0;
	} 
	else {
		document.getElementById("menu-opacity").style.opacity = 1;
	}
  	
}