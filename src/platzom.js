export default function platzom(str) {
	let translation = str
	
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str) {
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if(str == reverse(str)) {
		return minMay(str)
	}
	
	//si la primera palabra termina en "ar", se le quitan esos dos caractéres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}

	//Si la palabra inica con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}

	//Si la palabra traducida tiene 10 o mas letras,
	//se debe partir a la itad y unir con un guion medio
	if (translation.length >= 10){
		const firstHalf = translation.slice(0, Math.round(translation.length / 2))
		const secondHalf = translation.slice(Math.round(translation.length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}


	return translation
}

console.log(platzom("Programar"))
console.log(platzom("Zorro"))
console.log(platzom("Zarpar"))
console.log(platzom("abecedario"))
console.log(platzom("sometemos"))