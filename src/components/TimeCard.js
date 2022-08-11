import { useParams } from "react-router-dom";
import classes from "./TimeCard.module.css";
import Ellipsis from "../images/ellipsis.svg";

const TimeCard = (props) => {
  const { time } = useParams();
  let timeChosen;
  if (time === "weekly") {
    timeChosen = "Last Week";
  } else if (time === "daily") {
    timeChosen = "Yesterday";
  } else if (time === "monthly") {
    timeChosen = "Last Month";
  }

  return (
    <div className={classes.timeCard}>
      <div className={classes.photo} style={{ backgroundColor: props.bgColor }}>
        <img src={props.img} alt="" />
      </div>

      <div className={classes.text}>
        <div>
          <p className={classes.title}>{props.title}</p>
          <img src={Ellipsis} alt="" />
        </div>
        <div className={classes.bottom}>
          <p className={classes.hours}>{props.currHours}hrs</p>
          <p className={classes.prevTime}>
            {timeChosen} - {props.prevHours}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
