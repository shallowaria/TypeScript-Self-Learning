// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Chengdu";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  //不能在class外访问
  private _courseCount = 1;

  readonly city: string = "Chengdu";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const aria = new User("h@h.com", "aria", "SI");
// aria.city = "SICHUAN"
// aria.city

// aria.deleteToken()
