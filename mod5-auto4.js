//MODUL5 AUTOTEST4

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

parent.hasOwnProperty("surname"); //повертає true
console.log(
  "parent.hasOwnProperty(surname) = ",
  parent.hasOwnProperty("surname")
);

parent.hasOwnProperty("heritage"); //повертає true
console.log(
  "parent.hasOwnProperty(heritage) =",
  parent.hasOwnProperty("heritage")
);

child.hasOwnProperty("name"); //повертає true
console.log("child.hasOwnProperty(name) =", child.hasOwnProperty("name"));

child.name; //повертає "Jason"
console.log("child.name =", child.name);

child.hasOwnProperty("age"); //повертає true
console.log("child.hasOwnProperty(age) =", child.hasOwnProperty("age"));

child.age; //повертає 27
console.log("child.age =", child.age);

child.hasOwnProperty("surname"); //повертає false
console.log("child.hasOwnProperty(surname) =", child.hasOwnProperty("surname"));

child.surname; //повертає "Moore"
console.log("child.surname =", child.surname);

child.hasOwnProperty("heritage"); //повертає false
console.log(
  "child.hasOwnProperty(heritage) =",
  child.hasOwnProperty("heritage")
);

child.heritage; //повертає "Irish"
console.log("child.heritage =", child.heritage);

parent.isPrototypeOf(child); //повертає true
console.log("parent.isPrototypeOf(child) =", parent.isPrototypeOf(child));
