import { describe, expect, test } from "@jest/globals";
import { Graph } from "../Graph";

describe("Graph test", () => {
	test("New graph test", () => {
		const graph = new Graph();
		expect(graph).toEqual({ adjacencyList: {} });
	});

	test("Add vertex to graph", () => {
		const graph = new Graph();
		graph.addVertex("a");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set(),
			},
		});

		graph.addVertex("b").addVertex("c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set(),
				b: new Set(),
				c: new Set(),
			},
		});

		graph.addVertex("a");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set(),
				b: new Set(),
				c: new Set(),
			},
		});
	});

	test("Add edge to the graph", () => {
		const graph = new Graph();
		graph.addEdge("a", "b");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set().add("b"),
				b: new Set().add("a"),
			},
		});

		graph.addEdge("a", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set().add("b").add("c"),
				b: new Set().add("a"),
				c: new Set().add("a"),
			},
		});

		graph.addEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set().add("b").add("c"),
				b: new Set().add("a").add("c"),
				c: new Set().add("a").add("b"),
			},
		});
	});

	test("Remove edge from a graph", () => {
		const graph = new Graph();

		graph.addEdge("a", "b").addEdge("a", "c").addEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set().add("b").add("c"),
				b: new Set().add("a").add("c"),
				c: new Set().add("b").add("a"),
			},
		});

		graph.removeEdge("a", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set().add("b"),
				b: new Set().add("a").add("c"),
				c: new Set().add("b"),
			},
		});

		graph.removeEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set().add("b"),
				b: new Set().add("a"),
				c: new Set(),
			},
		});

		graph.removeEdge("b", "a");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set(),
				b: new Set(),
				c: new Set(),
			},
		});

		graph.removeEdge("b", "a");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set(),
				b: new Set(),
				c: new Set(),
			},
		});
	});

	test("Remove vertex from graph", () => {
		const graph = new Graph();
		graph.addEdge("a", "b").addEdge("a", "c").addEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Set().add("b").add("c"),
				b: new Set().add("a").add("c"),
				c: new Set().add("b").add("a"),
			},
		});

		graph.removeVertex("a");
		expect(graph).toEqual({
			adjacencyList: {
				b: new Set().add("c"),
				c: new Set().add("b"),
			},
		});

		graph.removeVertex("b");
		expect(graph).toEqual({
			adjacencyList: {
				c: new Set(),
			},
		});

		graph.removeVertex("c");
		expect(graph).toEqual({
			adjacencyList: {},
		});

		graph.removeVertex("d");
		expect(graph).toEqual({
			adjacencyList: {},
		});
	});

	test("Recursive DFS on a graph", () => {
		const graph = new Graph();
		graph.addEdge("A", "B");
		graph.addEdge("A", "C");
		graph.addEdge("B", "D");
		graph.addEdge("C", "E");
		graph.addEdge("D", "E");
		graph.addEdge("D", "F");
		graph.addEdge("E", "F");

		expect(graph.dfsRecursive("A")).toEqual(["A", "B", "D", "E", "C", "F"]);
	});

	test("Iterative DFS on a graph", () => {
		const graph = new Graph();
		graph.addEdge("A", "B");
		graph.addEdge("A", "C");
		graph.addEdge("B", "D");
		graph.addEdge("C", "E");
		graph.addEdge("D", "E");
		graph.addEdge("D", "F");
		graph.addEdge("E", "F");

		expect(graph).toEqual({
			adjacencyList: {
				A: new Set().add("B").add("C"),
				B: new Set().add("A").add("D"),
				C: new Set().add("A").add("E"),
				D: new Set().add("B").add("E").add("F"),
				E: new Set().add("C").add("D").add("F"),
				F: new Set().add("D").add("E"),
			},
		});

		expect(graph.dfsIterative("A")).toEqual(["A", "C", "E", "F", "D", "B"]);
	});
});
