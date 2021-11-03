interface AdjacencyList {
	[key: string]: Map<string, number>;
}

export class WeightedGraph {
	adjacencyList: AdjacencyList;
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex: string): WeightedGraph {
		if (this.adjacencyList[vertex] === undefined) {
			this.adjacencyList[vertex] = new Map();
		}
		return this;
	}

	addEdge(vertex1: string, vertex2: string, weight: number): WeightedGraph {
		this.addVertex(vertex1).addVertex(vertex2);

		this.adjacencyList[vertex1].set(vertex2, weight);
		this.adjacencyList[vertex2].set(vertex1, weight);
		return this;
	}

	removeVertex(vertex: string): WeightedGraph {
		const nodes = this.adjacencyList[vertex];

		if (nodes) {
			nodes.forEach((_weight, node) => {
				this.adjacencyList[node].delete(vertex);
			});
		}

		delete this.adjacencyList[vertex];

		return this;
	}

	removeEdge(vertex1: string, vertex2: string): WeightedGraph {
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
		return this;
	}
}
