//MODUL5 AUTOTEST3

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};

// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
// Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.
historyService.getOrdersLog();
console.log(historyService.getOrdersLog());
historyService.getEmails();
console.log(historyService.getEmails());
historyService.getOrdersByEmail("solomon@topmail.net");
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
//повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
historyService.getOrdersByEmail("artemis@coldmail.net");
console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));
//повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
