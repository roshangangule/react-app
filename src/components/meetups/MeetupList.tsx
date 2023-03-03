import { MeetupModel } from "../../models/MeetupModel";
import { MeetupItem } from "./MeetupItem";
import classes from "./MeetupList.module.css";

export const MeetupList: React.FC<{ meetupList: any }> = (props) => {
   return (
    <div>
      <ul className={classes.list}>
        {props.meetupList.map((meetupModel: MeetupModel) => {
          console.log(meetupModel.id);
          return <MeetupItem meetupModel = {meetupModel} key={meetupModel.id}/>;
        })}
      </ul>
    </div>
  );
};
