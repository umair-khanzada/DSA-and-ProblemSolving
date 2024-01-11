import {LinkedList} from './linkedList';

console.log('Start');


let list = new LinkedList();
list.append('Umair');
list.append('Zubair');
list.prepend('Sohaib');
const head = list.getHead();
const size = list.getSize();
console.log('size: ', size);
console.log('data: ', head?.data, head?.next?.data, head?.next?.next?.data);


console.log('End');