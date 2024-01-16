import {LinkedList} from './linkedList';

console.log('Start');


let list = new LinkedList();
list.append('2');
list.append('4');
list.prepend('1');
list.appendAt('3', 2);
const head = list.getHead();
const size = list.getSize();
console.log('size: ', size);
console.log('data: ', head?.data, head?.next?.data, head?.next?.next?.data, head?.next?.next?.next?.data);
console.log('Head: ', list.getHead()?.data);
console.log('Tail: ', list.getTail()?.data);
console.log('Index 2: ', list.getAt(2)?.data);
console.log('Index 0: ', list.getAt(0)?.data);
// console.log('Index 10: ', list.getAt(10)?.data);


console.log('End');