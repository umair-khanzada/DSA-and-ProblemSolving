import {LinkedList} from './linkedList';

console.log('Start');


let list = new LinkedList();
list.append('2');
list.append('4');
list.prepend('1');
list.addAt('3', 2);
const head = list.getHead();
const size = list.getSize();
console.log('size: ', size);
console.log('data: ', head?.data, head?.next?.data, head?.next?.next?.data, head?.next?.next?.next?.data);


console.log('End');