var html = document.getElementById("resolution");
var button = document.querySelector(".button");

function getResolution() {
	var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

  html.textContent = `Current window resolution: ${width} x ${height}`;
  console.log("ok");
}

window.addEventListener("load", getResolution);
window.addEventListener("resize", getResolution);