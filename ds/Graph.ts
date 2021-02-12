export interface AdjacencyList {
	[key: string]: Array<string>;
}

export class Graph {
	adjacencyList: AdjacencyList;
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex: string) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
		return this;
	}

	addEdge(vertex1: string, vertex2: string) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
		return this;
	}

	removeEdge(vertex1: string, vertex2: string) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(vertex: string) => vertex !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(vertex: string) => vertex !== vertex1
		);
		return this;
	}

	removeVertex(vertex: string) {
		const vertexList = this.adjacencyList[vertex];
		while (vertexList.length !== 0) {
			let node = vertexList.pop();
			if (node) {
				this.adjacencyList[node] = this.adjacencyList[node].filter(
					(vertex: string) => vertex !== vertex
				);
			}
		}
		delete this.adjacencyList[vertex];
		return this;
	}
}
