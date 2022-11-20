//MODUL5 AUTOTEST18

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel(рівень доступу),
//     значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
class User {
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
// Change code below this line
class Admin extends User {
    static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"};
}

Admin.AccessLevel.BASIC; //повертає рядок "basic"
Admin.AccessLevel.SUPERUSER; //повертає рядок "superuser"
console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);