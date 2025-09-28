// const user: (string | number)[] = [1 ,"hc"];

//不止设置类型，还设置位置
// const 变量一旦声明，就得马上有值。
let tUser: [string, number, boolean];

tUser = ["hc", 114, true];
// tUser = [true, 1223, "fg"];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "change me!";
// newUser.push(true);

export {};
