//MODUL5 AUTOTEST9

// Додай класу Car два методи.
// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
  getPrice() {
    console.log("getPrice = ", this.price);
    return this.price;
  }
  changePrice(newPrice) {
    console.log("changePrice to newPrice =", newPrice);
    this.price = newPrice;
  }
  // Change code above this line
}

const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 }); // виклик метода `getPrice()` поверне число `36000`
car1.getPrice();
console.log(car1);
// виклик метода `changePrice(35000)` і за наступного виклику `getPrice()` поверне число `35000`
car1.changePrice(35000);
console.log(car1);
