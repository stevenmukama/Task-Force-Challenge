/**
 * Function to determine if there exists a contiguous subarray
 * within the array that sums up to the target.
 *
 * @param {number[]} arr - Array of integers
 * @param {number} target - Target sum
 * @returns {boolean} - Returns true if such a subarray exists, otherwise false
 */
function hasSubarrayWithSum(arr, target) {
	let currentSum = 0; // This variable keeps track of the current sum of the subarray
	let start = 0; // Start index of the subarray

	// Loop through each element in the array
	for (let end = 0; end < arr.length; end++) {
		currentSum += arr[end];

		// If the current sum exceeds the target, move the start index to the right
		while (currentSum > target && start <= end) {
			currentSum -= arr[start]; // Subtract the element at the start index from the current sum
			start++;
		}

		// Check if the current sum is equal to the target
		if (currentSum === target) {
			return true;
		}
	}

	return false;
}

// Example usage:
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
