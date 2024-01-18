import {LinkedList} from './linkedList';

test('Append multiple items and check list size', () => {
    let list = new LinkedList();
    expect(list.getSize()).toBe(0);
    list.append('1');
    list.append('2');
    expect(list.getSize()).toBe(2);
});