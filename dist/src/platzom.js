'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	//si la primera palabra termina en "ar", se le quitan esos dos caractéres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	//Si la palabra inica con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	//Si la palabra traducida tiene 10 o mas letras,
	//se debe partir a la itad y unir con un guion medio
	if (translation.length >= 10) {
		var firstHalf = translation.slice(0, Math.round(translation.length / 2));
		var secondHalf = translation.slice(Math.round(translation.length / 2));
		translation = firstHalf + '-' + secondHalf;
	}

	return translation;
}
