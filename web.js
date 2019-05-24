
window.onload = function(){
let w = canvas.width = canvas.clientWidth,
	h = canvas.height = canvas.clientHeight,
	ctx = canvas.getContext("2d"),
	dots = [],
	mouseCoords = {x : 0, y : 0},
	checked = true,
	mult = speed.value,
	direct = dir.value;

Array.prototype.line = function(){
	for (let i = 0; i< this.length - 1; i++){
		for (let k = i + 1; k < this.length; k++){
			let r = Math.sqrt(Math.pow(this[i].x - this[k].x, 2) + Math.pow(this[i].y - this[k].y, 2));
				// f = Math.sqrt(Math.pow(this[i].x - mouseCoords.x, 2) + Math.pow(this[i].y - mouseCoords.y, 2)),
				// g = Math.sqrt(Math.pow(this[k].x - mouseCoords.x, 2) + Math.pow(this[k].y - mouseCoords.y, 2)),
				// h = (f + g)/2
			if (r < 150) {
				let d = r+100;
				ctx.strokeStyle = "rgb(" + d + "," + d + "," + d + ")";
				ctx.beginPath();
				ctx.moveTo(this[i].x, this[i].y)
				ctx.lineTo(this[k].x, this[k].y)
				ctx.stroke();
			}
		}
	}
};
document.addEventListener("mousemove",mm);
function mm (e) {
	mouseCoords.x = e.clientX;
	mouseCoords.y = e.clientY;
}

	function Dot() {
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.vX = Math.random()*2 - 1;
		this.vY = Math.random()*2 - 1;
	}

	Dot.prototype.move = function(){
		let r = 1;
		// console.log(checked)
		if (checked) r = Math.sqrt(Math.pow(this.x - mouseCoords.x, 2) + Math.pow(this.y - mouseCoords.y, 2))/300;
		if (this.x > w + 100 || this.x < -100) this.vX *= -1;
		if (this.y > h + 100 || this.y < -100) this.vY *= -1;
		if (Math.random() < direct) {		
			this.vX = Math.random()*2 - 1;
			this.vY = Math.random()*2 - 1;
		}
		this.x += this.vX*mult/r;
		this.y += this.vY*mult/r;
	};

		Dot.prototype.draw = function(){
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
		ctx.stroke();
	};

		Dot.prototype.drawLine = function(x,y,d){
		ctx.beginPath();
		d /= 2;
		if (d < 150 ) d = 120;
		ctx.strokeStyle = "rgb(" + d + "," + d + "," + d + ")";
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(x,y);
		ctx.stroke();
	};

	for (let i = number.value; i--;){
		dots.push(new Dot());
	}

	setInterval(function (){
		ctx.clearRect(0,0,w,h);
		dots.forEach(el => {
			el.move(); 
		});
		dots.line();

	},1000/60)

speed.oninput = function () {
	mult = this.value;
}
number.oninput = function () {
	let value = this.value;
		if (value < dots.length) dots.length = value;
		if (value > dots.length) {
			for (let i = dots.length; i < value; i++) {
				dots.push(new Dot());
			}
		}
}
mouse.onchange = function () {
	checked = this.checked;
}
settings.onclick = ()=> {
	document.getElementById('set-cont').classList.toggle("hidden")
}
dir.oninput = function () {
	direct = this.value;
}
}
