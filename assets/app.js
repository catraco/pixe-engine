/*

-------------------
- Main App Script
-------------------

*/

function setup(){

	// Setup function //
	
	setTimeout(() => {
		document.getElementsByClassName("loading-page")[0].style.display = "none";
	}, 2000);

}

window.onload = () => {

	setup();

}