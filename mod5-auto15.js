//MODUL5 AUTOTEST15

class Car {
  // Change code below this line
    #brand;
    #model;
    #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand () {
    return this.#brand;
    }

  set brand (newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model (newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price (newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

// Виконай рефакторинг класу Car.Зроби властивості model і price приватними,
//     а також #brand.Стандартизуй публічний інтерфейс класу, замінивши вже
//     оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.

const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car1);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.price);
car1.brand="Toyota";
car1.model="Corola";
car1.price=15000;
console.log(car1.brand);
console.log(car1.model);
console.log(car1.price);