
let w = canvas.width = canvas.clientWidth,
	h = canvas.height = canvas.clientHeight,
	ctx = canvas.getContext("2d"),
	dots = [],
	mouseCoords = {x : 0, y : 0};

// canvas.onmousemove = (e)=> {
// 	mouseCoords.x = e.offsetX;
// 	mouseCoords.y = e.offsetY;
// }

document.addEventListener("mousemove",mm);
function mm (e) {
	console.log(e)
	mouseCoords.x = e.offsetX;
	mouseCoords.y = e.offsetY;
}
	function Dot() {
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.vX = Math.random() * 2 - 1;
		this.vY = Math.random() * 2 - 1;
	}
	Dot.prototype.move = function(){
		if (this.x > w + 100 || this.x < -100) this.vX *= -1;
		if (this.y > h + 100 || this.y < -100) this.vY *= -1;
		this.x += this.vX;
		this.y += this.vY;
	};
		Dot.prototype.draw = function(){
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
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

	for (let i = 50; i--;){
		dots.push(new Dot());
	}

	setInterval(function (){
		ctx.clearRect(0,0,w,h);
		dots.forEach(el => {
			let distance = Math.sqrt(Math.pow(el.x - mouseCoords.x, 2) + Math.pow(el.y - mouseCoords.y, 2));
			if (distance < 610 ) el.drawLine(mouseCoords.x,mouseCoords.y, distance)
			el.move(); 
			el.draw();
		});


	},1000/60)

