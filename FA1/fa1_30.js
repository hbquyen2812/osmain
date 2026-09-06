const sumEvenNumbers = (numbers) => {
  const evenNumbers = numbers.filter((n) => n % 2 === 0);
  return evenNumbers.reduce((total, n) => total + n, 0);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbers));