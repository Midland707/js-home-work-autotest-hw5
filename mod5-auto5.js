//MODUL5 AUTOTEST5

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Change code above this line
// Зміни код, побудувавши ланцюжок прототипів таким чином,
//     щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

ancestor.isPrototypeOf(parent); //повертає true
console.log("ancestor.isPrototypeOf(parent) =", ancestor.isPrototypeOf(parent));

parent.isPrototypeOf(child); //повертає true
console.log("parent.isPrototypeOf(child) =", parent.isPrototypeOf(child));

ancestor.hasOwnProperty("surname"); //повертає true
console.log(
  "ancestor.hasOwnProperty(surname) =",
  ancestor.hasOwnProperty("surname")
);

ancestor.surname; //повертає "Dawson"
console.log("ancestor.surname =", ancestor.surname);

parent.hasOwnProperty("surname"); //повертає true
console.log(
  "parent.hasOwnProperty(surname) =",
  parent.hasOwnProperty("surname")
);

parent.surname; //повертає "Moore"
console.log("parent.surname =", parent.surname);

child.hasOwnProperty("surname"); //повертає false
console.log("child.hasOwnProperty(surname) =", child.hasOwnProperty("surname"));

child.surname; //повертає "Moore"
console.log("child.surname =", child.surname);

ancestor.hasOwnProperty("heritage"); //повертає true
console.log(
  "ancestor.hasOwnProperty(heritage) =",
  ancestor.hasOwnProperty("heritage")
);

ancestor.heritage; //повертає "Irish"
console.log("ancestor.heritage =", ancestor.heritage);

parent.hasOwnProperty("heritage"); //повертає false
console.log(
  "parent.hasOwnProperty(heritage) =",
  parent.hasOwnProperty("heritage")
);

parent.heritage; //повертає "Irish"
console.log("parent.heritage", parent.heritage);

child.hasOwnProperty("heritage"); //повертає false
console.log(
  "child.hasOwnProperty(heritage) =",
  child.hasOwnProperty("heritage")
);

child.heritage; //повертає "Irish"
console.log("child.heritage =", child.heritage);
