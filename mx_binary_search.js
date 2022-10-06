const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 29];
const len = arr.length;
let count = 0;

function binarySearch(arr, item) {
	let start = 0;
	let middle;
	let end = len;
	let found = false;
	let position = -1;

	while (found === false && start <= end) {
		count += 1;
		middle = Math.floor((start + end) / 2);

		if (arr[middle] === item) {
			found = true;
			position = middle;
			return position;
		}
		if (item > arr[middle]) {
			start = middle + 1;
		}else {end = middle - 1;}
	}

	return position;
}

function recursiveBinarySearch(arr, item, start, end) {
	let midle = Math.floor((start + end) / 2);

	if (arr[midle] === item) {
		return midle;
	}
	if (arr[midle] > item) {
		return recursiveBinarySearch(arr, item, start, midle - 1);
	}
	else {
		return recursiveBinarySearch(arr, item, midle + 1, end);
	}
}

console.log(recursiveBinarySearch(arr, 23, 0, arr.length));
