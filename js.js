let inArray = [],outArray = [];
function compareRandom(a, b) {
  return Math.random() - 0.5;
}


textIn.oninput = function () {
	inArray = this.value.split(/\s/);
	 outArray = inArray.sort(compareRandom);
	 textOut.value = outArray.join(" ");

	// for (var i = inArray.length - 1; i >= 0; i--) {
	// 	inArray[i] = inArray[i].split(/\b/)
	// }
	// 	// console.log(inArray)
}








// textIn.oninput = function () {
// 	inArray = this.value.split(/(?<=\.|!|\?)\B/);
// 	// outArray = inArray.sort(compareRandom);
// 	// textOut.value = outArray.join(" ");

// 	for (var i = inArray.length - 1; i >= 0; i--) {
// 		inArray[i] = inArray[i].split(/\b/)
// 	}
// 		console.log(inArray)
// }