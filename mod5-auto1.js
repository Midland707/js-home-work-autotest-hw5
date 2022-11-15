//MODUL5 AUTOTEST1

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      console.log(`Sorry, there is no pizza named «${pizzaName}»`);
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }
    console.log(`Order accepted, preparing «${pizzaName}» pizza`);
    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

pizzaPalace.order("Smoked"); //повертає рядок "Order accepted, preparing «Smoked» pizza"
pizzaPalace.order("Four meats"); //повертає рядок "Order accepted, preparing «Four meats» pizza"
pizzaPalace.order("Big Mike"); //повертає рядок "Sorry, there is no pizza named «Big Mike»"
pizzaPalace.order("Viennese"); //повертає рядок "Sorry, there is no pizza named «Viennese»"

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.
