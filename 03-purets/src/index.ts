class User {
  email: string;
  name: string;
  readonly city: string = "Chengdu";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const aria = new User("h@h.com", "aria");
// aria.city = "SICHUAN"
