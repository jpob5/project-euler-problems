import React, { useState } from 'react';
import './001.scss';

const MultiplesOf3Or5 = () => {
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [maxNumber, setMaxNumber] = useState(10);
  const [answer, setAnswer] = useState(0);

  const multiples = [3, 5];

  const calculateAnswer = (maxNumber, multiples) => {
    let answer = 0;

    for (let i = 0; i < maxNumber; i++) {

      const isFactor = multiples.some((multiple) => {
        return i % multiple === 0;
      })

      if (isFactor) {
        answer += i;
      }
    }

    setAnswer(answer);
  }

  const showAnswer = () => {
    calculateAnswer(maxNumber, multiples);
    setAnswerRevealed(true);
  }


  return (
    <div>
      <h2>Multiples of 3 or 5</h2>
      <p><strong>Problem 1</strong></p>
      <div className="challenge">
        <p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
        <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
      </div>
      <input type="number" value={maxNumber} onChange={(elem) => setMaxNumber(elem.target.value)} />
      <button onClick={showAnswer}>Solve</button>
      {answerRevealed ? <p>The answer is <strong>{answer}</strong>.</p> : <></>}
    </div>
  )
}

export default MultiplesOf3Or5

