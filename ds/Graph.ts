export interface AdjacencyList {
	[key: string]: Set<string>;
}

export class Graph {
	adjacencyList: AdjacencyList;
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex: string) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
		return this;
	}

	addEdge(vertex1: string, vertex2: string) {
		if (this.adjacencyList[vertex1] === undefined)
			this.adjacencyList[vertex1] = new Set();
		if (this.adjacencyList[vertex2] === undefined)
			this.adjacencyList[vertex2] = new Set();
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
		return this;
	}

	removeEdge(vertex1: string, vertex2: string) {
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
		return this;
	}

	removeVertex(vertex: string) {
		const vertexList = this.adjacencyList[vertex];
		if (vertexList) {
			vertexList.forEach((node) => {
				this.adjacencyList[node].delete(vertex);
			});
			delete this.adjacencyList[vertex];
		}
		return this;
	}
}
