//MODUL5 AUTOTEST7

// Додай класу Car метод constructor, який приймає три параметри:
// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price,
// значеннями яких повинні бути передані аргументи під час його виклику з оператором new.
class Car {
  // Change code below this line
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

console.log(Car);

const car1 = new Car("Audi", "Q3", 36000); //утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
console.log(car1);
const car2 = new Car("BMW", "X5", 58900); //утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
console.log(car2);
const car3 = new Car("Nissan", "Murano", 31700); //утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }
console.log(car3);
