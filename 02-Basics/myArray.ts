const superHeros: string[] = [];
// const heroPower: number[] = []; 等价于⬇️
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

//二维数组
const MLModels: number[][] = [[255, 255, 255], []];

MLModels.push([114, 514]);

superHeros.push("spiderman");
// heroPower.push([1,2,3]);
heroPower.push(1, 2, 3);

allUsers.push({ name: "", isActive: true });
