//local
import Goal from "../Goal/Goal";
import classes from "./GoalsList.module.css";

const GoalsList = (props) => {
  return (
    <div className={classes.container}>
      {props.goalsList.map((element) => {
        return <Goal key={element.id} goal={element}></Goal>;
      })}
    </div>
  );
};

export default GoalsList;
