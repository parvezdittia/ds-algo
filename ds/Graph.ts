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

	dfsRecursive(startVertex: string) {
		const visited: Set<string> = new Set();
		const searchOutput: Array<string> = [];

		const dfs = (vertex: string) => {
			searchOutput.push(vertex);
			visited.add(vertex);

			const ajdacentVertices = this.adjacencyList[vertex];

			ajdacentVertices.forEach((adjacentVertex) => {
				if (!visited.has(adjacentVertex)) {
					dfs(adjacentVertex);
				}
			});
		};

		dfs(startVertex);
		return searchOutput;
	}

	dfsIterative(startVertex: string) {
		const visited: Set<string> = new Set();
		const searchOutput: Array<string> = [];
		const stack: Array<string> = [];

		stack.push(startVertex);

		while (stack.length !== 0) {
			let vertex = stack.pop();
			if (vertex) {
				if (!visited.has(vertex)) {
					searchOutput.push(vertex);
					visited.add(vertex);
					const ajdacentVertices = this.adjacencyList[vertex];
					ajdacentVertices.forEach((adjacentVertex) => {
						stack.push(adjacentVertex);
					});
				}
			}
		}

		return searchOutput;
	}

	bfs(startVertex: string) {
		const visited: Set<string> = new Set();
		const searchOutput: Array<string> = [];
		const queue: Array<string> = [];

		queue.push(startVertex);

		while (queue.length !== 0) {
			let vertex = queue.shift();

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
