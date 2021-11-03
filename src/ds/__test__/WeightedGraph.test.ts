import { describe, expect, test } from "@jest/globals";
import { WeightedGraph as Graph } from "../WeightedGraph";

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
				a: new Map(),
			},
		});

		graph.addVertex("b").addVertex("c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map(),
				b: new Map(),
				c: new Map(),
			},
		});

		graph.addVertex("a");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map(),
				b: new Map(),
				c: new Map(),
			},
		});
	});

	test("Add edge to the graph", () => {
		const graph = new Graph();
		graph.addEdge("a", "b", 1);
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map().set("b", 1),
				b: new Map().set("a", 1),
			},
		});

		graph.addEdge("a", "c", 2);
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map().set("b", 1).set("c", 2),
				b: new Map().set("a", 1),
				c: new Map().set("a", 2),
			},
		});

		graph.addEdge("b", "c", 3);
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map().set("b", 1).set("c", 2),
				b: new Map().set("a", 1).set("c", 3),
				c: new Map().set("a", 2).set("b", 3),
			},
		});
	});

	test("Remove edge from a graph", () => {
		const graph = new Graph();

		graph.addEdge("a", "b", 1).addEdge("a", "c", 2).addEdge("b", "c", 3);
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map().set("b", 1).set("c", 2),
				b: new Map().set("a", 1).set("c", 3),
				c: new Map().set("a", 2).set("b", 3),
			},
		});

		graph.removeEdge("a", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map().set("b", 1),
				b: new Map().set("a", 1).set("c", 3),
				c: new Map().set("b", 3),
			},
		});

		graph.removeEdge("b", "c");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map().set("b", 1),
				b: new Map().set("a", 1),
				c: new Map(),
			},
		});

		graph.removeEdge("b", "a");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map(),
				b: new Map(),
				c: new Map(),
			},
		});

		graph.removeEdge("b", "a");
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map(),
				b: new Map(),
				c: new Map(),
			},
		});
	});

	test("Remove vertex from graph", () => {
		const graph = new Graph();
		graph.addEdge("a", "b", 1).addEdge("a", "c", 2).addEdge("b", "c", 3);
		expect(graph).toEqual({
			adjacencyList: {
				a: new Map().set("b", 1).set("c", 2),
				b: new Map().set("a", 1).set("c", 3),
				c: new Map().set("a", 2).set("b", 3),
			},
		});

		graph.removeVertex("a");
		expect(graph).toEqual({
			adjacencyList: {
				b: new Map().set("c", 3),
				c: new Map().set("b", 3),
			},
		});

		graph.removeVertex("b");
		expect(graph).toEqual({
			adjacencyList: {
				c: new Map(),
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
});
