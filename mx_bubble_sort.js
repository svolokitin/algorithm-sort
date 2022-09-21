const arr = [10, 1, 3, 3, 9, 11, 2, 4, 5, 32];

//length array = 10

function bubble_sort(arr) {
	const len = arr.length;

	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const item = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = item;
			}
		}

		console.log(i, arr);
	}

	return arr;
}

console.log(bubble_sort(arr));


