
let n,r,dots = [];
inp.onchange = function () {
	let array = this.value.split(/\n/g),
		arr = array.shift().split(/\s/);
	n = arr[0];
	r = arr[1];
	dots = array.map(e => ({x : e.split(/\s/)[0], y : e.split(/\s/)[1]}))
}

Array.prototype.sum = function(){
	if (!this.length) return 0;
	return  this.reduce((a,b) => a+b);
	
}
button.onclick = ()=>{

	let sq = dots.map(function(e) {
		return square(e,r)
	});		
	out.innerHTML = (sq.sum()).toFixed(10)

}


function square (dot,r) {
	let arr = [], arr2 = [];	

	function squareOfSegment (dist) {
		if (dist < r) {
			let alph = 2 * Math.acos(dist / r);
			arr.push(1 / 2 * r * r * (alph - Math.sin(alph)));
		}
	}
	
	function excess (dx,dy) {
		if (Math.sqrt(dx * dx + dy * dy) < r){
			let y = dy - Math.sqrt((r*r - dx * dx));
			let x = dx - Math.sqrt((r*r - dy * dy));
			let d = Math.sqrt(r * r - Math.sqrt(x * x + y * y)/2 * Math.sqrt(x * x + y * y)/2);
			let a = 2 * Math.acos(d / r);
			arr2.push(1 / 2 * r * r * (a - Math.sin(a)) + x * y / 2);
		}
	}	

	squareOfSegment(dot.x)
	squareOfSegment(1 - dot.x)
	squareOfSegment(dot.y)
	squareOfSegment(1 - dot.y)

	excess (dot.x, dot.y)
	excess (dot.x, 1 - dot.y)
	excess (1 - dot.x, dot.y)
	excess (1 - dot.x, 1 - dot.y)

	return Math.PI * r * r - arr.sum() + arr2.sum();
}	


