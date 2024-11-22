//const plus = (a,b) => a+b
const plus = (a: number, b: number) => a + b;

plus(2, 2); // 4
plus(2, "hi"); // "2hi"

const user = {
  firstName: "Kim",
  lastName: "MJ",
};

console.log(user.name);
