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

	addEdge(vertex1: string, vertex2: string) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1: string, vertex2: string) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(vertex: string) => vertex !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(vertex: string) => vertex !== vertex1
		);
	}
}
