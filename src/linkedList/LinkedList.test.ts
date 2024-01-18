import {LinkedList} from './LinkedList';

let list = new LinkedList();
test('List should be empty default.', () => {
    expect(list.getSize()).toBe(0);
});

test('Append multiple items and check items are added correctly.', () => {
    list.append('Append 1');
    let head = list.getHead();
    expect(head?.data).toBe('Append 1');
    list.append('Append 2');
    expect(head?.next?.data).toBe('Append 2');
    expect(list.getSize()).toBe(2);
});

test('Prepend an item and check item is added correctly.', () => {
    list.prepend('Prepend 1');
    let head = list.getHead();
    expect(head?.data).toBe('Prepend 1');
    expect(head?.next?.data).toBe('Append 1');
    expect(list.getSize()).toBe(3);
});

test('AppendAt random index and check item is added correctly.', () => {
    list.appendAt('appendAt 1', 1);
    let head = list.getHead();
    expect(head?.next?.data).toBe('appendAt 1');
    expect(list.getSize()).toBe(4);
});