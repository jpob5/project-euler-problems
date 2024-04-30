import * as React from "react";
import './001.scss';

const MultiplesOf3Or5 = () => {

  let answer = 0;

  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer += i;
    }
  }

  return (
    <div>
      <h2>Multiples of 3 or 5</h2>
      <p><strong>Problem 1</strong></p>
      <div className="challenge">
        <p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
        <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
      </div>
      <p>The answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

export default MultiplesOf3Or5

