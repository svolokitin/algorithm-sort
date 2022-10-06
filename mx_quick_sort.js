const arr = [12, 43, 83, 38, 32, 0, 3, 7, 32, 83, 37, 29, 95, 26, 33, 77, 48, -5, -1, 3];
let count = 0;

function quickSort(arr) {
	let len = arr.length;
	let numIndex = Math.floor(len / 2);
	let num = arr[numIndex];
	let more = [];
	let less = [];

	if (len <= 1) {
		return arr;
	}

	for (let i = 0; i < len; i++) {
		if (i === numIndex) {
			continue;
		}
		if (arr[i] > num) {
			more.push(arr[i]);
		}
		else {
			less.push(arr[i]);
		}
	}

	return [...quickSort(less), num, ...quickSort(more)];
}

console.log(quickSort(arr));
