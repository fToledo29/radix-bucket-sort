
const bucketSort = (inpArr, size, pos) => {

	let i = 0;
	const range = 10;
	const outputArr = [];
	let bucketArr = Array.from({length: range}, () => []);
	let arrCopy = [...inpArr];

	while(i < size) {

		const position = parseInt((arrCopy[i] / pos) % 10, 10);

		bucketArr[position].push(arrCopy[i]);

		i++;
	}

	i = 0;
	while(i < bucketArr.length) {

		let j = i;

		while(bucketArr[i].length > 0) {

			outputArr.push(bucketArr[i].shift());
		
		}

		i++;
	}
	return outputArr;
}

const radixSort = (arr) => {

	console.log('Input Array: ', arr);

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

		// break;
	}

	return arr;
	
}


const inputArr = [170, 45, 963, 75, 90, 199, 599, 802, 24, 2, 66];

const res = radixSort(inputArr);

console.log('\n');

console.log('Output Array: ', res);