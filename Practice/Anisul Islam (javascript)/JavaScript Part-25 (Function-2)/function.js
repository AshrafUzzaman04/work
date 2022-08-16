// IIFEs (Immidiately Invokeable Function Expressions)

(function sumation(sum1, sum2) {
  console.log(sum1 + sum2);
})(10, 20);

// Function Expressions

const multiple2 = function multiple(x, y) {
  console.log(x * y);
};
multiple2(5, 5);
