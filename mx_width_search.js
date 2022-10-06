const graph = {};

graph.a = ['b', 'c'];
graph.b = ['e'];
graph.c = ['d'];
graph.d = ['e'];
graph.e = ['f'];
graph.f = ['g'];

function widthSearch(graph, start, end) {
	let  mas= [];
	mas.push(start);

	while (mas.length > 0) {
		const current = mas.shift();

		if (!graph[current]) {
			graph[current] = [];
		}
		if (graph[current].includes(end)) {
			return true;
		}
		else {
			mas = [...mas, ...graph[current]];
		}
	}

	return false;
}

console.log(widthSearch(graph, 'c', 'a'));
