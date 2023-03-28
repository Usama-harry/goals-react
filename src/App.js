import { useState, useEffect } from "react";

//local
import UserForm from "./components/UserForm/UserForm";
import GoalsList from "./components/GoalsList/GoalsList";

const sortGoals = (goals) => {
  var sortedGoals = [];

  for (var i = 0; i < goals.length; i++) {
    if (goals[i].priorty === 3) {
      sortedGoals.push(goals[i]);
    }
  }

  for (i = 0; i < goals.length; i++) {
    if (goals[i].priorty === 2) {
      sortedGoals.push(goals[i]);
    }
  }

  for (i = 0; i < goals.length; i++) {
    if (goals[i].priorty === 1) {
      sortedGoals.push(goals[i]);
    }
  }

  return sortedGoals;
};

function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [sortedGoalsList, setsortedGoalsList] = useState([]);

  useEffect(() => {
    setsortedGoalsList(sortGoals(goalsList));
  }, [goalsList]);

  const onAddGoal = (newGoal) => {
    setGoalsList((prevState) => [...prevState, newGoal]);
  };

  return (
    <div className="app">
      <UserForm onAddGoal={onAddGoal}></UserForm>
      <GoalsList goalsList={sortedGoalsList}></GoalsList>
    </div>
  );
}

export default App;
