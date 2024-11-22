import fs from 'fs';

export class Node{
    x: number;
    y: number;
    links: Node[];

    constructor (x: number, y: number, links: Node[]) {
        this.x = x;
        this.y = y;
        this.links = links;
    }

}

export function getRawMap(): string {
    const path = process.argv[2]
    const rawMap: string = fs.readFileSync(path, 'utf8');
    return rawMap
}

export function creatematrix(rawData: string): string[][] {
    const matrix: string[][] = rawData.split(' ').map(line => line.split(''))
    return matrix
}

export function createGraph(matrix: string[][]) {

    let graph: Node[][] = [];
    let start: Node | undefined;
    let end: Node  | undefined;
    
    for (let y = 0; y < matrix.length ; y++) {
        let row: Node[] = [];
        graph.push(row);
        for (let x = 0; x < matrix[y].length ; x++) {
            row.push(new Node(matrix[y].indexOf(matrix[y][x], x ), matrix.indexOf(matrix[y]), []));
        }
    }

    for (let y = 0; y < matrix.length ; y++) {
        for (let x = 0; x < matrix[y].length ; x++) {
    
            if (matrix[y][x] !== "o") {
                
                const up: string | Node = y === 0 ? 'undefined' : matrix[y - 1][x];
                const down: string | Node = y === matrix.length - 1 ? 'undefined' : matrix[y + 1][x];
                const right: string | Node =  x === matrix[y].length - 1 ? 'undefined' :  matrix[y][x + 1];
                const left: string | Node = x === 0 ? 'undefined' :  matrix[y][x - 1];

                if (up !== 'undefined' && matrix[y - 1][x] !== 'o') {
                    graph[y][x].links.push(graph[y - 1][x]); 
                }
                if (down !== 'undefined' && matrix[y + 1][x] !== 'o') {
                    graph[y][x].links.push(graph[y + 1][x]);
                }
                if (right !== 'undefined' && matrix[y][x + 1] !== 'o') {
                    graph[y][x].links.push(graph[y][x + 1]);
                }
                if (left !== 'undefined' && matrix[y][x - 1] !== 'o') {
                    graph[y][x].links.push(graph[y][x - 1]);
                }
                if (matrix[y][x].toLowerCase() === 's' ){
                    start = graph[y][x]
                }
                if (matrix[y][x].toLowerCase() === 'e' ){
                    end = graph[y][x]
                }
              
            }
        }
    }
    if (start === undefined) {
        throw new Error('le MAZE ne possède aucune entrée !!');
    }
    if (end === undefined) {
        throw new Error("Le MAZE ne possède aucune sortie !!");
    }
    return {start, end}
}

export function bfs(start: Node, end: Node) {

    let queue: Node[] = [start];
    const visited: Set<Node> = new Set(); 
    const paths: Map<Node, string[]> = new Map();
    paths.set(start, []);

    while (queue.length > 0) {
        
        let current: Node | undefined = queue.shift()
        
        if (current === end) {
            paths.get(end)?.push(`${end!.y}:${end!.x}`)
            return paths.get(end)!.join(' ');
        }

        for (const link of current!.links) {
            visited.add(current!);
            if (!visited.has(link)) queue.push(link);
            paths.set(link, paths.get(current!)?.concat([`${current!.y}:${current!.x}`]) ?? []);
        }
    }

}