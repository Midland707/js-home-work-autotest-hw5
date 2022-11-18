//MODUL5 AUTOTEST8

// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр
//     - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі(підписі) конструктора.
class Car {
  // Change code below this line
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 }); //утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
console.log(car1);
const car2 = new Car({ brand: "BMW", model: "X5", price: 58900 }); //утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
console.log(car2);
const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 }); //утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }
console.log(car3);
