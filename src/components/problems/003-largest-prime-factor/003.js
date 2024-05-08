import * as React from "react";

const LargestPrimeFactor = () => {

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  }

  const getFactors = () => {

    const factors = [];

    for (let i = 1; i < maxNumber; i += 2) {
      if (largeNumber % i === 0) {
        if (isPrime(i)) {
          factors.push(i)
        }

        if (isPrime(largeNumber / i)) {
          factors.push(largeNumber / i)
        }

        maxNumber = largeNumber / i;
      }
    }
    return factors;
  }

  let answer = 0;

  const largeNumber = 600851475143;
  let maxNumber = Math.floor(largeNumber / 2);

  let factors = getFactors().sort(function (a, b) {  return a - b;  });

  answer = factors[factors.length - 1];

  return (
    <div>
      <h2>Largest Prime Factor</h2>
      <p><strong>Problem 3</strong></p>
      <div className="challenge">
        <p>The prime factors of 13195 are 5, 7, 13 and 29.</p>
        <p>What is the largest prime factor of the number 600851475143?</p>
      </div>
      <p>The answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

export default LargestPrimeFactor

