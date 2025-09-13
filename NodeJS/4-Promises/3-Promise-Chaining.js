// Promise Chaining → You can chain multiple .then() calls to run tasks in sequence:
new Promise((resolve) => {
  resolve(2);
})
  .then((num) => {
    console.log(num); // 2
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 4
    return num * 3;
  })
  .then((num) => {
    console.log(num); // 12
  });
