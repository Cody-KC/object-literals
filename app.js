console.log('hello world')

//primitive value

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log (`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log (`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference value

const userOne = {name: 'cody', age: 28};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 30;

console.log(userOne,userTwo);