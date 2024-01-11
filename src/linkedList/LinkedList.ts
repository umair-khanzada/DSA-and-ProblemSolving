import { Node } from './index';
import { NodeDataType } from './types';

export class LinkedList {
    private _head: Node | null;
    private _tail: Node | null;
    private _size: number;
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    append(data: NodeDataType) {
        // If _size === 0 means this is a first element so head and tail point to the same node.
        if(this._size === 0) this.prepend(data);
        else {
            const node = new Node(data);
            // Tail will always available, above condition will handle for blank list.
            // @ts-ignore
            this._tail.next = node;
            this._tail = node;
            this._size += 1;
        }
    }

    prepend(data: NodeDataType) {
        const node = new Node(data);
        node.next = this._head;
        this._head = node;
        // If _size === 0 means this is a first element so head and tail point to the same node.
        if(this._size === 0) this._tail = node;
        this._size += 1;
    }

    getHead() {
        return this._head;
    }

    getSize() {
        return this._size;
    }
}