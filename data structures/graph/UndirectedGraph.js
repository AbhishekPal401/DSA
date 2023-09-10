class Graph {
  constructor() {
    this.adjancenyList = [];
  }

  addVertex(vertex) {
    if (!this.adjancenyList[vertex]) this.adjancenyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjancenyList[v1].push(v2);
    this.adjancenyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjancenyList[v1] = this.adjancenyList[v1].filter((v) => v !== v2);
    this.adjancenyList[v2] = this.adjancenyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjancenyList[vertex].length) {
      const adjancenyNode = this.adjancenyList[vertex].pop();
      this.removeEdge(vertex, adjancenyNode);
    }

    delete this.adjancenyList[vertex];
  }

  DFSRecursively(start) {
    const result = [];
    const visited = {};
    const adjancenyList = this.adjancenyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      console.log(adjancenyList);
      adjancenyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjancenyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    const queue = [start];
    const visited = [];
    const result = [];

    visited[start] = true;

    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjancenyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.BFS('A'));
