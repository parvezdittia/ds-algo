import { describe, expect, test } from "@jest/globals";
import { AdjacencyList, Graph } from "../Graph";

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
				a: [],
			},
		});

		graph.addVertex("b").addVertex("c");
		expect(graph).toEqual({
			adjacencyList: {
				a: [],
				b: [],
				c: [],
			},
		});

		graph.addVertex("a");
		expect(graph).toEqual({
			adjacencyList: {
				a: [],
				b: [],
				c: [],
			},
		});
	});

	test("Add edge to the graph", () => {
		const graph = new Graph();
		graph.addEdge("a", "b");
		expect(graph).toEqual({
			adjacencyList: {
				a: ["b"],
				b: ["a"],
			},
		});

		graph.addEdge("a", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: ["b", "c"],
				b: ["a"],
				c: ["a"],
			},
		});

		graph.addEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: ["b", "c"],
				b: ["a", "c"],
				c: ["a", "b"],
			},
		});
	});

	test("Remove edge from a graph", () => {
		const graph = new Graph();
		graph.addEdge("a", "b").addEdge("a", "c").addEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: ["b", "c"],
				b: ["a", "c"],
				c: ["a", "b"],
			},
		});
		graph.removeEdge("a", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: ["b"],
				b: ["a", "c"],
				c: ["b"],
			},
		});
		graph.removeEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: ["b"],
				b: ["a"],
				c: [],
			},
		});

		graph.removeEdge("b", "a");
		expect(graph).toEqual({
			adjacencyList: {
				a: [],
				b: [],
				c: [],
			},
		});

		graph.removeEdge("b", "a");
		expect(graph).toEqual({
			adjacencyList: {
				a: [],
				b: [],
				c: [],
			},
		});
	});
});
