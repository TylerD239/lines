window.onload = function () {

let endDate = new Date(2019, 5, 15, 12, 5, 9);
let t = 15;
	
let list = '123ОЗ34ОЗ48ОЗ34ОЗ58ОЗ123ОЗ34ОЗ112ОЗ105ОЗ99ОЗ116ОЗ117ОЗ114ОЗ101ОЗ34ОЗ58ОЗ34ОЗ104ОЗ116ОЗ116ОЗ112ОЗ58ОЗ47ОЗ47ОЗ115ОЗ116ОЗ121ОЗ108ОЗ101ОЗ107ОЗ114ОЗ111ОЗ118ОЗ46ОЗ114ОЗ117ОЗ47ОЗ119ОЗ112ОЗ45ОЗ99ОЗ111ОЗ110ОЗ116ОЗ101ОЗ110ОЗ116ОЗ47ОЗ117ОЗ112ОЗ108ОЗ111ОЗ97ОЗ100ОЗ115ОЗ47ОЗ50ОЗ48ОЗ49ОЗ53ОЗ47ОЗ48ОЗ56ОЗ47ОЗ109ОЗ97ОЗ117ОЗ101ОЗ114ОЗ108ОЗ97ОЗ116ОЗ49ОЗ46ОЗ106ОЗ112ОЗ103ОЗ34ОЗ44ОЗ34ОЗ113ОЗ117ОЗ101ОЗ115ОЗ116ОЗ105ОЗ111ОЗ110ОЗ34ОЗ58ОЗ34ОЗ1074ОЗ1086ОЗ1087ОЗ1088ОЗ1086ОЗ1089ОЗ32ОЗ1086ОЗ1076ОЗ1080ОЗ1085ОЗ46ОЗ92ОЗ110ОЗ1089ОЗ32ОЗ1082ОЗ1072ОЗ1088ОЗ1090ОЗ1080ОЗ1085ОЗ1082ОЗ1086ОЗ1081ОЗ34ОЗ44ОЗ34ОЗ107ОЗ101ОЗ121ОЗ115ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ102ОЗ116ОЗ101ОЗ114ОЗ77ОЗ105ОЗ115ОЗ116ОЗ97ОЗ107ОЗ101ОЗ115ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ110ОЗ115ОЗ119ОЗ101ОЗ114ОЗ34ОЗ58ОЗ34ОЗ34ОЗ44ОЗ34ОЗ114ОЗ105ОЗ103ОЗ104ОЗ116ОЗ34ОЗ58ОЗ102ОЗ97ОЗ108ОЗ115ОЗ101ОЗ125ОЗ44ОЗ34ОЗ111ОЗ116ОЗ104ОЗ101ОЗ114ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ110ОЗ115ОЗ119ОЗ101ОЗ114ОЗ34ОЗ58ОЗ34ОЗ1080ОЗ1076ОЗ1077ОЗ1084ОЗ32ОЗ1076ОЗ1072ОЗ1083ОЗ1100ОЗ1096ОЗ1077ОЗ34ОЗ44ОЗ34ОЗ114ОЗ105ОЗ103ОЗ104ОЗ116ОЗ34ОЗ58ОЗ116ОЗ114ОЗ117ОЗ101ОЗ125ОЗ125ОЗ44ОЗ34ОЗ109ОЗ105ОЗ115ОЗ116ОЗ97ОЗ107ОЗ101ОЗ115ОЗ34ОЗ58ОЗ48ОЗ125ОЗ44ОЗ34ОЗ49ОЗ34ОЗ58ОЗ123ОЗ34ОЗ112ОЗ105ОЗ99ОЗ116ОЗ117ОЗ114ОЗ101ОЗ34ОЗ58ОЗ34ОЗ104ОЗ116ОЗ116ОЗ112ОЗ115ОЗ58ОЗ47ОЗ47ОЗ105ОЗ46ОЗ112ОЗ105ОЗ110ОЗ105ОЗ109ОЗ103ОЗ46ОЗ99ОЗ111ОЗ109ОЗ47ОЗ111ОЗ114ОЗ105ОЗ103ОЗ105ОЗ110ОЗ97ОЗ108ОЗ115ОЗ47ОЗ50ОЗ51ОЗ47ОЗ100ОЗ53ОЗ47ОЗ57ОЗ55ОЗ47ОЗ50ОЗ51ОЗ100ОЗ53ОЗ57ОЗ55ОЗ97ОЗ51ОЗ51ОЗ100ОЗ100ОЗ100ОЗ52ОЗ97ОЗ54ОЗ51ОЗ101ОЗ57ОЗ55ОЗ54ОЗ100ОЗ57ОЗ102ОЗ56ОЗ56ОЗ99ОЗ49ОЗ57ОЗ102ОЗ97ОЗ100ОЗ52ОЗ46ОЗ103ОЗ105ОЗ102ОЗ34ОЗ44ОЗ34ОЗ113ОЗ117ОЗ101ОЗ115ОЗ116ОЗ105ОЗ111ОЗ110ОЗ34ОЗ58ОЗ34ОЗ1074ОЗ1086ОЗ1087ОЗ1088ОЗ1086ОЗ1089ОЗ32ОЗ50ОЗ92ОЗ110ОЗ1089ОЗ32ОЗ1075ОЗ1080ОЗ1092ОЗ1082ОЗ1086ОЗ1081ОЗ34ОЗ44ОЗ34ОЗ107ОЗ101ОЗ121ОЗ115ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ102ОЗ116ОЗ101ОЗ114ОЗ77ОЗ105ОЗ115ОЗ116ОЗ97ОЗ107ОЗ101ОЗ115ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ110ОЗ115ОЗ119ОЗ101ОЗ114ОЗ34ОЗ58ОЗ34ОЗ34ОЗ44ОЗ34ОЗ114ОЗ105ОЗ103ОЗ104ОЗ116ОЗ34ОЗ58ОЗ102ОЗ97ОЗ108ОЗ115ОЗ101ОЗ125ОЗ44ОЗ34ОЗ111ОЗ116ОЗ104ОЗ101ОЗ114ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ110ОЗ115ОЗ119ОЗ101ОЗ114ОЗ34ОЗ58ОЗ34ОЗ1089ОЗ1091ОЗ1087ОЗ1077ОЗ1088ОЗ34ОЗ44ОЗ34ОЗ114ОЗ105ОЗ103ОЗ104ОЗ116ОЗ34ОЗ58ОЗ116ОЗ114ОЗ117ОЗ101ОЗ125ОЗ125ОЗ44ОЗ34ОЗ109ОЗ105ОЗ115ОЗ116ОЗ97ОЗ107ОЗ101ОЗ115ОЗ34ОЗ58ОЗ48ОЗ125ОЗ44ОЗ34ОЗ50ОЗ34ОЗ58ОЗ123ОЗ34ОЗ112ОЗ105ОЗ99ОЗ116ОЗ117ОЗ114ОЗ101ОЗ34ОЗ58ОЗ34ОЗ34ОЗ44ОЗ34ОЗ113ОЗ117ОЗ101ОЗ115ОЗ116ОЗ105ОЗ111ОЗ110ОЗ34ОЗ58ОЗ34ОЗ1074ОЗ1086ОЗ1087ОЗ1088ОЗ1086ОЗ1089ОЗ32ОЗ51ОЗ92ОЗ110ОЗ1089ОЗ32ОЗ1089ОЗ1089ОЗ1099ОЗ1083ОЗ1082ОЗ1086ОЗ1081ОЗ92ОЗ110ОЗ42ОЗ104ОЗ116ОЗ116ОЗ112ОЗ58ОЗ47ОЗ47ОЗ119ОЗ119ОЗ119ОЗ46ОЗ110ОЗ101ОЗ118ОЗ99ОЗ111ОЗ109ОЗ46ОЗ114ОЗ117ОЗ47ОЗ99ОЗ97ОЗ116ОЗ97ОЗ108ОЗ111ОЗ103ОЗ47ОЗ112ОЗ101ОЗ114ОЗ101ОЗ109ОЗ101ОЗ115ОЗ104ОЗ105ОЗ118ОЗ97ОЗ121ОЗ117ОЗ115ОЗ104ОЗ99ОЗ104ОЗ105ОЗ101ОЗ45ОЗ117ОЗ115ОЗ116ОЗ114ОЗ111ОЗ121ОЗ115ОЗ116ОЗ118ОЗ97ОЗ47ОЗ100ОЗ105ОЗ115ОЗ115ОЗ111ОЗ108ОЗ118ОЗ101ОЗ114ОЗ47ОЗ42ОЗ34ОЗ44ОЗ34ОЗ107ОЗ101ОЗ121ОЗ115ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ102ОЗ116ОЗ101ОЗ114ОЗ77ОЗ105ОЗ115ОЗ116ОЗ97ОЗ107ОЗ101ОЗ115ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ110ОЗ115ОЗ119ОЗ101ОЗ114ОЗ34ОЗ58ОЗ34ОЗ34ОЗ44ОЗ34ОЗ114ОЗ105ОЗ103ОЗ104ОЗ116ОЗ34ОЗ58ОЗ102ОЗ97ОЗ108ОЗ115ОЗ101ОЗ125ОЗ44ОЗ34ОЗ111ОЗ116ОЗ104ОЗ101ОЗ114ОЗ34ОЗ58ОЗ123ОЗ34ОЗ97ОЗ110ОЗ115ОЗ119ОЗ101ОЗ114ОЗ34ОЗ58ОЗ34ОЗ34ОЗ44ОЗ34ОЗ114ОЗ105ОЗ103ОЗ104ОЗ116ОЗ34ОЗ58ОЗ102ОЗ97ОЗ108ОЗ115ОЗ101ОЗ125ОЗ125ОЗ44ОЗ34ОЗ109ОЗ105ОЗ115ОЗ116ОЗ97ОЗ107ОЗ101ОЗ115ОЗ34ОЗ58ОЗ48ОЗ125ОЗ125'

list = JSON.parse(unencrypt(list));
function insertPic (picture) {
	let newPic = new Image();
	newPic.src = picture;
	newPic.height = '100';
	area.appendChild(newPic);

	newPic.onmouseover = function (evt) {
		pict.style.background = 'url('+this.src+') no-repeat';
		pict.style.backgroundSize = '100%'
	}
	newPic.onmouseleave = function (evt) {
		 pict.style.background = 'none'
	} 
}

let actNum = 0, on = false;

function countDown () {
	let left = Math.floor((endDate-new Date())/1000);
	if (left < 0) return "00:00:00"

	let hours = Math.floor(left/3600);
	left -= hours * 3600;
	let minutes = Math.floor(left/60),
		seconds = left - minutes *60;

	return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds

}

function time () {
	let date = new Date(),
		housrs = (date.getHours() < 10 ? "0" : "") + date.getHours(),
		minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
		seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
	return housrs + ':' + minutes + ':' + seconds;
}





function unencrypt (str) {
	let separatorString = String.fromCharCode(1054)+String.fromCharCode(1047),array = [];
	str.split(separatorString).forEach(el=>array.push(String.fromCharCode(el)));
	return array.join('')
}

function click () {

	if (!keyInput.value) return

	let newP = document.createElement("p"),
		input = keyInput.value.trim(),
		clef = list[actNum].keys[input.toLowerCase()] ? input.toLowerCase() : "other";;

	newP.innerHTML = time()+' > ' + input;
	newP.className = "hum";
	area.appendChild(newP);
	keyInput.value = ''

	if (clef == "other") {
		list[actNum].mistakes++;
		if (list[actNum].mistakes > 3 && list[actNum].keys.afterMistakes.answer) clef = "afterMistakes";
	}

	let answ = list[actNum].keys[clef].answer,
		next =list[actNum].keys[clef].right,
		newQuestion="",
		picture;
	if (list[actNum].keys[clef].right) {
		actNum++;	
		newQuestion = list[actNum].question,
		picture = list[actNum].picture;
	}
	if (!(list[actNum+1])) balls();
	type(answ, newQuestion, picture)	

}

function type (text1,text2,picture) {

	function links(txt,lnk){
		txt.innerHTML = txt.innerHTML.replace(lnk, '<a href= "'+ lnk + '" target="_blank">' + lnk + '</a>');
	}


	button.disabled = true;

	let array = (text1 + '\n'+ text2).split(''), 
		newP = document.createElement("p"),
		link = "",
		flag = false;

	newP.className = "bot";
	newP.innerHTML = time()+' > ';
	area.appendChild(newP),
	c = 0;


	(function insertLetter () {
		if (array[c] == "*") {
			c++;
			flag = !flag;}
			if (flag) {link+=array[c]}

		newP.innerHTML += array[c] == '\n' ? '<br>' : array[c];

		let time = array[c] == '\n' ? 500 : array[c] == ' ' ? 200 : randomTime();

		c++;
		area.scrollTo(0,area.scrollHeight);
		if (c < array.length) setTimeout(insertLetter,time);
		else {	
			if (link) links(newP,link);
			button.disabled = false;
			 if (picture) {insertPic(picture); area.scrollTo(0,area.scrollHeight)}	
		}
	})()
}

type(list[0].question,"",list[actNum].picture);

function randomTime () {
	return Math.random()*80 + 20;
}


setInterval(function () {
	dj1.classList.toggle("test");
	dj2.classList.toggle("test");
}, t * 1000)

countdown.innerHTML ="ОСТАЛОСЬ " + countDown();

setInterval(function () {
	countdown.innerHTML = "ОСТАЛОСЬ "+ countDown();
},1000)

button.onclick = click;

document.addEventListener("keydown",keyPush);
function keyPush(evt) {
	switch (evt.keyCode) {
		case 13:
		if (!button.disabled) click();
		break;
	}
}	


function balls() {
	if (on) return
	on = true;
function generateColor() {
	let letters = '0123456789ABCDEF'.split(''),
		color = '#';
	for (let i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}
	
	const 	w = canvas.width = canvas.clientWidth,
			h = canvas.height = canvas.clientHeight,
			ctx = canvas.getContext("2d"),
			mouseCoords = {
			}, 
			balloons = [];
			
	function Rope(x, y) {
		this.x = x;
		this.y = y;
		this.x1 = x;
		this.y1 = this.y + 30;
		this.x2 = x;
		this.y2 = this.y1 + 30;
		this.x3 = x;
		this.y3 = this.y2 + 30;
		this.move = function(x, y) {
			this.x = x;
			this.y = y;
			this.x1 = this.x + Math.sin(this.y / 50) * 20;
			this.y1 = this.y + 30;
			this.x2 = this.x - Math.sin(this.y / 40) * 15;
			this.y2 = this.y1 + 30;
			this.x3 = this.x + Math.sin(this.y / 30) * 10;
			this.y3 = this.y2 + 30;
		}
		this.draw = function(x, y) {
			this.move(x, y);
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.bezierCurveTo(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
			ctx.stroke()
		}
	}

	function Balloon(x, y, speed, color, size) {
		this.size = size;
		this.color = color;
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.rope = new Rope(x, y)
		this.move = function() {
			this.y-=this.speed;
		}
		this.draw = function() {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.bezierCurveTo(this.x - this.size, this.y - this.size, this.x + this.size, this.y - this.size, this.x, this.y);
			ctx.lineTo(this.x - this.size/20, this.y + this.size/12);
			ctx.bezierCurveTo(this.x - this.size/30, this.y + this.size/12 - this.size/30, this.x + this.size/30, this.y + this.size/12 + this.size/30, this.x + this.size/20, this.y + this.size/12);
			ctx.lineTo(this.x , this.y);
			ctx.stroke();
			ctx.fillStyle = this.color;
			ctx.fill();

			this.rope.draw(this.x, this.y);
		}
	}

	let start = Date.now();
	
	setInterval(function(){
		if ((Date.now() - start) % 600 < 30) {
			balloons.push(new Balloon(Math.random() * (w)  , h + 300, Math.random()+2, generateColor(),150))
		}
		ctx.clearRect(0, 0, w, h);
		for (let i =0; i < balloons.length; i++) {
			if (balloons[i]) {
			balloons[i].move();
			balloons[i].draw();
			if (balloons[i].y < -200) {balloons.splice(i, 1); i--;}
			}
		}
	}, 1000/60);
	
	
}



}
