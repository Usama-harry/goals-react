//local
import Button from "../Button/Button";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["add-goal-title"]}>Add Goal</div>
      <input placeholder="Enter your new goal" className={classes.input} />
      <Button>Add</Button>
    </div>
  );
};

export default UserForm;
