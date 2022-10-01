const arr = [3, 5, 1, 2, 4, 9, 6, 7, 8, 10];
const len = arr.length;
let count = 0;

function linearSearch(arr, item) {
	for (let i = 0; i < len; i++) {
		count += 1;
		if (arr[i] === item) {
			return i;
		}
	}

	return null;
}

console.log(linearSearch(arr,12));
console.log('count = ', count);