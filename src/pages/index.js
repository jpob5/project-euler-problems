import * as React from "react";
import MultiplesOf3Or5 from "../components/problems/001-multiples-of-3-or-5/001";
import EvenFibonacciNumbers from "../components/problems/002-even-fibonacci-numbers/002";
import LargestPrimeFactor from "../components/problems/003-largest-prime-factor/003";
import LargestPalindromeProduct from "../components/problems/004-largest-palindrome-product/004";
import './home.scss';

const IndexPage = () => {
  return (
    <main>
      <h1>
        Project Euler Problems
      </h1>
      <div className="problem">
        <h2>Todos</h2>
        <ul>
          <li>Make site prettier</li>
          <li>Make problems interactve</li>
          <li>Add menu</li>
          <li>Make Problem component</li>
          <li>Add hooks</li>
        </ul>
      </div>
      <div className="problem">
        <LargestPalindromeProduct />
      </div>
      <div className="problem">
        <LargestPrimeFactor />
      </div>
      <div className="problem">
        <EvenFibonacciNumbers />
      </div>
      <div className="problem">
        <MultiplesOf3Or5 />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Project Euler Problems</title>
