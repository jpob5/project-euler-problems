import * as React from "react";
import Layout from "../../components/layout";
import MultiplesOf3Or5 from "../../components/problems/001-multiples-of-3-or-5/001";
import EvenFibonacciNumbers from "../../components/problems/002-even-fibonacci-numbers/002";
import LargestPrimeFactor from "../../components/problems/003-largest-prime-factor/003";
import LargestPalindromeProduct from "../../components/problems/004-largest-palindrome-product/004";

const Problems = () => {
  return (
    <Layout pageTitle="Problems">
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
    </Layout>
  )
}

export const Head = () => <title>Project Euler Problems</title>

export default Problems

