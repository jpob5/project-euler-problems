import * as React from "react";
import Layout from "../components/layout";
import { Link } from 'gatsby'
import MultiplesOf3Or5 from "../components/problems/001-multiples-of-3-or-5/001";
import EvenFibonacciNumbers from "../components/problems/002-even-fibonacci-numbers/002";
import LargestPrimeFactor from "../components/problems/003-largest-prime-factor/003";
import LargestPalindromeProduct from "../components/problems/004-largest-palindrome-product/004";
import './home.scss';

const IndexPage = () => {
  return (
    <Layout>  
      <h2>Welcome</h2>
      <Link to="/problems">
        Problems
      </Link>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Project Euler Problems</title>
