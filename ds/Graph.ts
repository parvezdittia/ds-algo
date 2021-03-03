interface AdjacencyList {
	[key: string]: Set<string>;
}

export class Graph {
	adjacencyList: AdjacencyList;
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex: string): Graph {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
		return this;
	}

	addEdge(vertex1: string, vertex2: string): Graph {
		if (this.adjacencyList[vertex1] === undefined)
			this.adjacencyList[vertex1] = new Set();
		if (this.adjacencyList[vertex2] === undefined)
			this.adjacencyList[vertex2] = new Set();
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
		return this;
	}

	removeEdge(vertex1: string, vertex2: string): Graph {
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
		return this;
	}

	removeVertex(vertex: string): Graph {
		const vertexList = this.adjacencyList[vertex];
		if (vertexList) {
			vertexList.forEach((node) => {
				this.adjacencyList[node].delete(vertex);
			});
			delete this.adjacencyList[vertex];
		}
		return this;
	}

	dfsRecursive(startVertex: string): Array<string> {
		const visited: Set<string> = new Set();
		const searchOutput: Array<string> = [];

		const dfs = (vertex: string) => {
			searchOutput.push(vertex);
			visited.add(vertex);

			const adjacentVertices = this.adjacencyList[vertex];

			adjacentVertices.forEach((adjacentVertex) => {
				if (!visited.has(adjacentVertex)) {
					dfs(adjacentVertex);
				}
			});
		};

		dfs(startVertex);
		return searchOutput;
	}

	dfsIterative(startVertex: string): Array<string> {
		const visited: Set<string> = new Set();
		const searchOutput: Array<string> = [];
		const stack: Array<string> = [];

		stack.push(startVertex);

		while (stack.length !== 0) {
			const vertex = stack.pop();
			if (vertex) {
				if (!visited.has(vertex)) {
					searchOutput.push(vertex);
					visited.add(vertex);
					const adjacentVertices = this.adjacencyList[vertex];
					adjacentVertices.forEach((adjacentVertex) => {
						stack.push(adjacentVertex);
					});
				}
			}
		}

		return searchOutput;
	}

	bfs(startVertex: string): Array<string> {
		const visited: Set<string> = new Set();
		const searchOutput: Array<string> = [];
		const queue: Array<string> = [];

		queue.push(startVertex);

		while (queue.length !== 0) {
			const vertex = queue.shift();

			if (vertex) {
				if (!visited.has(vertex)) {
					searchOutput.push(vertex);
					visited.add(vertex);

					const adjacentVertices = this.adjacencyList[vertex];

					adjacentVertices.forEach((adjacentVertex) => {
						queue.push(adjacentVertex);
					});
				}
			}
		}

		return searchOutput;
	}
}
