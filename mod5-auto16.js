//MODUL5 AUTOTEST16

class Car {
  // Change code below this line
    #price;
    static MAX_PRICE= 50000;

  constructor({price}) {
      this.#price = price;
  }

  get price() {
    return this.#price;
  }

    set price(newPrice) {
        if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// Виконай рефакторинг класу Car.
// Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. 
// Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює,
//     то перезаписує ціну автомобіля.