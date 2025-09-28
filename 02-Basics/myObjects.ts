// const User = {
//   name: "Aria",
//   email: "Aria@gmail.com",
//   isActive: true,
// };

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

// let newUser = { name: "Aria", isPaid: false, email: "h@h.com" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type Mystring = string;

function createUser(user: User): User {
  // return { name: "", email: "", isActive: true };
  // return user;
  return { ...user, isActive: true };
}

createUser({ name: "", email: "", isActive: true });

export {};
