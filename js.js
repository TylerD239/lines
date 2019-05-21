function color (n) {
	n*=2;
	if (n > 255) n = 255;
	if (n < 0) n = 0;
	return `rgb(${n} ,${255 - n} ,0)`
}


let sizes = {};

for (let i = 0; i < 1000; i++){
	sizes[i * 300] = {i : i, k : 0};
	for (let k = 1; k < 5; k++){
		sizes[i * 300 + 720 * k] = {i : i, k : k};
	}	
}
// console.log(sizes)
function fill (number) {

	let nearest = 0, remainder = 0;

	for (key in sizes) {
		if (key > number) break;
		nearest = key;
		remainder = number - key;
	}

	let blocks = {
		300 : sizes[nearest].i,
		720 : sizes[nearest].k
		},
		multipliers = [8,4,3,2],
		str = "";

	for (let i = 0; i < multipliers.length; i++){
		if (blocks[300] >= multipliers[i]) {
			let width = multipliers[i] * 300;
			blocks[width] ? blocks[width]++ : blocks[width] = 1;
			blocks[300] -= multipliers[i]
			i--
		}
	}

	for (key in mlt){
		if (blocks[key]) str= key + "мм &#215;" + "<span class = 'nums'>" + blocks[key] + "</span>" + " + " + str;
		mlt[key] = blocks[key]||0;
	}

	str = str.slice(0, -2);

	if (remainder) str += " + " + "<span id = 'rem' style = 'color:"+color(remainder)+" '>" + remainder + "</span>" + "мм"	

	return str 

}


mid.onclick = ()=>{
for (key in mlt){
	mult[key] = mlt[key];
	recount();
	inputs.forEach( function(e) {
		e.value = mult[e.id];
});
}
}

refr.onclick = ()=>{
	for (key in mult){
		mult[key] = 0;
	}
	recount();
		inputs.forEach( function(e) {
		e.value = mult[e.id];
});
}

input.onchange = function () {
	if (!this.value) {
		out.innerHTMLs = "";
		mid.className = "off"
		img.className = "off"
		return;}
	let inp =  parseInt(this.value);

	if (inp > 250000) inp = 250000;
	if (inp < 0) inp *=-1;

	if (isNaN(inp)){
		out.innerHTML = "не число";
		mid.className = "off";
		img.className = "off";

		return
}
	this.value = inp;
	out.innerHTML = fill(inp);
	// rem.style.color = color();
	// fill(+this.value)
if (mid.className == "on") {
	if (img.style.transform == 'rotate(360deg)') {img.style.transform = 'rotate(0deg)';return}
	img.style.transform = 'rotate(360deg)'
}
mid.className = "on"
img.className = "on"
}

let inputs = document.querySelectorAll(".inps")

let mult = {2400:0,1200:0,900:0,720:0,600:0,300:0},mlt = {2400:0,1200:0,900:0,720:0,600:0,300:0}, r = 0;
function recount() {
	r = (24 * mult[2400] + 12 * mult[1200] + 9 * mult[900] + 7.2 * mult[720] + 6 * mult[600] + 3 * mult[300]) * 100;
	res.innerHTML = Math.trunc(r) + "мм"

}

let plus = document.querySelectorAll(".plus")
plus.forEach( function(e,i) {
	e.onclick = function (){
		let k = inputs[i].id
		if (mult[k] > 100) return
		mult[k]++; 
		inputs[i].value = mult[k]
		recount()
	}
});

let minus = document.querySelectorAll(".minus")
minus.forEach( function(e,i) {
	e.onclick = ()=> {
		let k = inputs[i].id
		if (mult[k] < 1) return
		mult[k]--; 
		inputs[i].value = mult[k]	
		recount()
	}
});


