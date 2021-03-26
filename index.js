
/**
 * Sorts numbers of the given array by storing the numbers on buckets.
 * @inpArr: Array of numbers
 * @size: Size of the given array
 * @pos: Radix base that calculates the position of the numbers
 */
const bucketSort = (inpArr, size, pos) => {

	let i = 0;

	// This is only the range of numbers that we will be handling. 
	const range = 10;

	// Array where out result will be stored.
	const outputArr = [];

	/**
	 *  Creating the bucket array where numbers will be temporarily stored.
	 */
	let bucketArr = Array.from({length: range}, () => []);

	/**
	 * Looping through the size of the given array so we can access
	 * to all its items.
	 */
	while(i < size) {

		/**
		 * Calculating the index, where the number of the given position
		 * is going to be located.
		 */
		const index = parseInt((inpArr[i] / pos) % 10, 10);

		/**
		 * Adding the current item of the given array, into the calculated
		 * index of the bucket array. 
		 */
		bucketArr[index].push(inpArr[i]);

		// increasing counter
		i++;
	}

	// Restart counter
	i = 0;

	/**
	 * Looping through all the buckets
	 */
	while(i < bucketArr.length) {

		let j = i;

		/**
		 * For each bucket we loop all its items.
		 */
		while(bucketArr[i].length > 0) {

			/**
			 * Getting the number located in the first position of bucket array 
			 * at the same time removing it from the array and adding it into 
			 * the output array.
			 */
			outputArr.push(bucketArr[i].shift());
		
		}

		i++;
	}

	// Send back the result.
	return outputArr;
}

const radixSort = (arr = []) => {

	console.log('Input Array: ', arr);

	if (arr.length === 0) {
		console.log('Nothing to sort!')
		return;
	}

	/**
	 * Getting the size of the given array, will help us to create 
	 * our output array also to loop through the values to be sorted.
	 */
	const n = arr.length;

	/**
	 * Getting the maximum value inside the given array.
	 * Helps us to loop through the position of the digit to be sorted.
	 */
	const maxValue = arr.reduce((acc, val, ind) => acc > val ? acc : val, 0);

	// Start the initial position (1/10/100/1000...n)
	// (expo/pos/div)
	let pos = 1;

	/**
	 * The loop depends mostly on the maximum value of the given array.
	 * If mmax value is 11 it will loop only 2 times, if it's 111 will
	 * loop 3 times 1111 4 times and so on.
	 */
	while(parseInt(maxValue / pos, 10) > 0) {

		/**
		 * Given array will get a sorted from the least significant digit
		 * to the most significant digit. Ex. 111 will start from rigth
		 * to left:  1 <- 1 <- 1
		 * 
		 * So "pos" will help with it
		 */
		arr = bucketSort(arr, n, pos);

		/**
		 * As "pos" will be helping, it will increase its value 10 times each loop.
		 */
		pos = parseInt((pos * 10), 10);

		break;
	}

	return arr;
	
}

const inputArr = [170, 45, 3.5, 963, 78990, 987333.97, 75, 90, 199, 599, 1.8, 802, 24, 2, 66];

const res = radixSort(inputArr);

console.log('\n');

console.log('Output Array: ', res);