import classes from "./Goal.module.css";

const Goal = (props) => {
  const priortyClass =
    props.goal.priorty === 1
      ? classes.green
      : props.goal.priorty === 2
      ? classes.white
      : classes.red;
  return (
    <div className={classes.container}>
      <div className={`${classes.priorty} ${priortyClass}`}></div>
      <div className={classes.title}>{props.goal.text}</div>
      <div></div>
    </div>
  );
};

export default Goal;
