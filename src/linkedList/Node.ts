import { NodeDataType } from './types';

// Here id the shortend, but we go with the more readable one
// constructor(public data: NodeDataType, public next: Node | null = null) {}

export class Node {
    data: NodeDataType;
    next: Node | null;
    constructor(data: NodeDataType) {
        this.data = data;
        this.next = null;
    }
}