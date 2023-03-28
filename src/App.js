import UserForm from "./components/UserForm/UserForm";
import Goal from "./models/goal";
import classes from "./App.module.css";

function App() {
  const onAddGoal = (newGoal) => {
    console.log(newGoal);
  };

  return (
    <div className="app">
      <UserForm onAddGoal={onAddGoal}></UserForm>
    </div>
  );
}

export default App;
