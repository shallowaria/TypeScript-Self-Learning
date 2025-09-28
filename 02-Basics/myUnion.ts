let score: number | string | boolean = 24;
score = 34;
score = "44";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let aria: User | Admin = { name: "Aria", id: 114 };

aria = { username: "aa", id: 514 };

// function getDbId(id: number | string) {
//   //API calls
//   console.log(`DB id is : ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

// 定义不局限于类型
let pi: 3.14 = 3.14;

// pi = 3.145;

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew";
