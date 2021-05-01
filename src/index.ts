import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

/*
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const char = new CharactersCollection("Xaaybc");
char.sort();
console.log(char.data);
*/

const linkedList = new LinkedList();
linkedList.add(200);
linkedList.add(-22);
linkedList.add(6);
linkedList.add(78);

linkedList.sort();
linkedList.print();
