import * as React from "react";

const LargestPalindromeProduct = () => {

  const largestFactor = 999;

  const isPalindrome = (num) => {
    let reversedNum = String(num).split("").reverse().join("");
    return String(num) === reversedNum;
  }

  const calculateAnswer = () => {
    let largestPalindrome = 0;

    for (let i = 1; i <= largestFactor; i++) {
      for (let j = i; j <= largestFactor; j++) {
        const product = i * j;
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }

    return largestPalindrome;
  }

  let answer = calculateAnswer();

  return (
    <div>
      <h2>Largest Prime Factor</h2>
      <p><strong>Problem 4</strong></p>
      <div className="challenge">
        <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.</p>
        <p>Find the largest palindrome made from the product of two 3-digit numbers.</p>
      </div>
      <p>The answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

export default LargestPalindromeProduct

