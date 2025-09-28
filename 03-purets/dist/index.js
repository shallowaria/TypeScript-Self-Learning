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
    email;
    name;
    userId;
    //不能在class外访问
    _courseCount = 1;
    city = "Chengdu";
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    isFamily = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const aria = new User("h@h.com", "aria", "SI");
export {};
// aria.city = "SICHUAN"
// aria.city
// aria.deleteToken()
//# sourceMappingURL=index.js.map