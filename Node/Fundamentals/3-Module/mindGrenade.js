// when node exports its(code in mindGrenade file) is wrap its in function by NodeJS automatically so that why when we required, it will run or invoked here and actully it is execute there only in mindGrenade file if we have that kind of function

const num1 = 10;
const num2 = 5;

const addValues = (num1, num2) => {
  console.log(`The sum of these values is : ${num1 + num2}`);
};

addValues(num1, num2);
