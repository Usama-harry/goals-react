import { useState } from "react";
import { v4 as uuid } from "uuid";

//local
import Button from "../Button/Button";
import Goal from "../../models/goal";

import { Priorty } from "../../utils/enums";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredValue, setInteredValue] = useState("");
  const [priorty, setPriorty] = useState(Priorty.low);
  const [isValid, setIsValid] = useState(true);

  const onChangeInput = (event) => {
    if (event.target.value.trim().length !== 0) setIsValid(true);
    setInteredValue(event.target.value);
  };
  const onChangePriorty = (event) => {
    setPriorty(event.target.value);
  };

  const onAddGoal = (event) => {
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const id = uuid();
    const newGoal = new Goal(id, enteredValue.trim(), parseInt(priorty));
    props.onAddGoal(newGoal);

    setInteredValue("");
    setPriorty(Priorty.low);
  };
  return (
    <div className={classes.container}>
      <div
        className={`${classes["add-goal-title"]} ${
          !isValid && classes.invalid
        }`}
      >
        Add Goal
      </div>
      <input
        onChange={onChangeInput}
        value={enteredValue}
        placeholder="Enter your new goal"
        className={`${classes.input} ${!isValid && classes["invalid-input"]}`}
      />
      <div className={classes.dropdown}>
        <select
          value={priorty}
          onChange={onChangePriorty}
          name="priorty"
          id="priorty"
        >
          <option value={Priorty.low}>Low</option>
          <option value={Priorty.medium}>Medium</option>
          <option value={Priorty.high}>High</option>
        </select>
      </div>
      <Button onClick={onAddGoal}>Add</Button>
    </div>
  );
};

export default UserForm;
