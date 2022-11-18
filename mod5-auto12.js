//MODUL5 AUTOTEST12

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною,
// і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

class Car {
  // Change code below this line
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  // Change code above this line
}

const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 }); //утвориться об'єкт { model: "Q3", price: 36000 }
console.log(car1);
const car2 = new Car({ brand: "bmw", model: "X5", price: 58900 }); //утвориться об'єкт { model: "X5", price: 58900 }
console.log(car2);
const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 }); //утвориться об'єкт { model: "Murano", price: 31700 }
console.log(car3);
console.log(car3.getBrand());
car3.changeBrand("Honda");
console.log(car3.getBrand());
