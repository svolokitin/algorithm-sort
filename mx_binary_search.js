const arr = [0, 1, 2, 3, 4, 5, 6];
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

console.log(binarySearch(arr, 2));
console.log('count = ', count);
