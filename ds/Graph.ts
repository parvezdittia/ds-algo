interface AdjacencyList {
	[key: string]: Array<string>;
}

class Graph {
	adjacencyList: AdjacencyList;
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex: string) {
		if (this.adjacencyList[vertex]) return;
		this.adjacencyList[vertex] = [];
		return this;
	}
}
