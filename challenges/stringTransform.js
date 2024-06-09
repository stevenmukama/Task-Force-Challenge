/**
 * Transform a string based on its length:
 * - Reverse the string if the length is divisible by 3.
 * - Replace each character with its ASCII code if the length is divisible by 5.
 * - Perform both operations if the length is divisible by 15.
 *
 * @param {string} str - The input string
 * @returns {string} - The transformed string
 */
function transformString(str) {
	const length = str.length;

	if (length % 15 === 0) {
		// Reverse the string and replace each character with its ASCII code
		return str
			.split('')
			.reverse()
			.map((char) => char.charCodeAt(0))
			.join(' ');
	} else if (length % 3 === 0) {
		// Reverse the string
		return str.split('').reverse().join('');
	} else if (length % 5 === 0) {
		// Replace each character with its ASCII code
		return str
			.split('')
			.map((char) => char.charCodeAt(0))
			.join(' ');
	}

	return str; // Return the original string if none of the conditions are met
}

// Example usage:
console.log(transformString('Hamburger')); // Output: "regrubmaH"
console.log(transformString('Pizza')); // Output: "80 105 122 122 97"
console.log(transformString('Chocolate Chip Cookie')); // Output: "eikooC pihC etalocohC"
