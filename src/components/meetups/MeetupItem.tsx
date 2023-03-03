import { MeetupModel } from "../../models/MeetupModel";
import { Card } from "../ui/Card";
import classes from "./MeetupItem.module.css";

export const MeetupItem: React.FC<{ meetupModel: MeetupModel }> = (props) => {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.meetupModel.image} alt={props.meetupModel.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetupModel.title}</h3>
          <address>{props.meetupModel.address}</address>
          <p>{props.meetupModel.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
};
