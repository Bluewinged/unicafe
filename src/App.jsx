import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good + neutral * 0 + bad * -1) / all;
  let positive = (good / all) * 100 + " %";

  console.log(all, average, positive);

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given yet</p>;
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log("good clicks", good);
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutralClick = () => {
    console.log("neutral clicks", neutral);
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBadClick = () => {
    console.log("bad clicks", bad);
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
