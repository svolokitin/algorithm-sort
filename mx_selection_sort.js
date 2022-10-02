const array = [10, 6, 25, 11, 2, 3, 2, 1];
const len = array.length;
let count = 0;

function selectionSearch(array) {
	for (let i = 0; i < len - 1; i++) {
		console.log(array);
		let min = i;
		count += 1;
		for (let j = i + 1; j < len; j++) {
			if (array[min] > array[j]) {
				min = j;
			}
		}
		[array[i], array[min]] = [array[min], array[i]];
	}
	return array;
}

console.log(selectionSearch(array));
console.log(count);
