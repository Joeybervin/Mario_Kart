import { creatematrix, createGraph, getRawMap, bfs, Node } from "./lib/index.lib";

try {
    const fileRawData: string = getRawMap();

    const matrix: string[][] = creatematrix(fileRawData);

    const grapfInfos = createGraph(matrix);

    const start: Node = grapfInfos.start;

    const end: Node = grapfInfos.end;

    console.log(bfs(start, end));

    
} catch (error) {
    console.error("ERROR : ", error)
}




