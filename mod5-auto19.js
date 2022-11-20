//MODUL5 AUTOTEST19

// Додай класу Admin метод constructor, який приймає один параметр -
//     об'єкт налаштувань з двома властивостями email і accessLevel.
//     Додай класу Admin публічну властивість accessLevel, значення якої
//     буде передаватися під час виклику конструктора.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  
    constructor(email, accessLevel) {
    this.accessLevel = accessLevel
    }
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"