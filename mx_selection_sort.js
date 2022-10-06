const array = [10, 6, 25, 11, 2, 3, 2, 1];
const len = array.length;
let count = 0;

function selectionSort(array) {
	for (let i = 0; i < len - 1; i++) {
		console.log(array);
		let min = i;
		for (let j = i + 1; j < len; j++) {
			if (array[min] > array[j]) {
				min = j;
			}

			count += 1;
		}
		[array[i], array[min]] = [array[min], array[i]];
	}
	return array;
}

console.log(selectionSort(array));
console.log(count);
