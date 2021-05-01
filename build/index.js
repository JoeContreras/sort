"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
/*
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const char = new CharactersCollection("Xaaybc");
char.sort();
console.log(char.data);
*/
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(200);
linkedList.add(-22);
linkedList.add(6);
linkedList.add(78);
linkedList.sort();
linkedList.print();
