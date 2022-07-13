const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".heroBoy");
const vilan = document.querySelector(".vilan");
var _vilanPosition = 450;

function jump() {
	
hero.style.top = '10px';
	//if(hero.classList!="animate") {
	//	hero.classList.add("animate");
	//	vilan.style.animation = "move 1s infinite linear";
	//}
	setTimeout(function() {
		hero.style.top = '150px';
	}, 300);
}


document.addEventListener("keydown",function() {
	console.log("ooooooo");
	jump();
});

let isAlive =setInterval(function() {
	let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
	
	let vilanLeft = parseInt(window.getComputedStyle(vilan).getPropertyValue("top"));
	//console.log("qqqqq = "+heroTop
	if(vilanLeft<40 && vilanLeft>20 && heroTop <=130) {
		vilan.style.animation = "none";
		
	}
	//alert("!!!!!!");
	_vilanPosition-=1;
	//var vilanPosition = _vilanPosition-1;
	
	vilan.style.left = _vilanPosition +'px';
	//vilan.style.width ="-300px";
	if(_vilanPosition<0){
		_vilanPosition = 450;
	}
	
},10);