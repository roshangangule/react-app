import { useContext } from "react";
import { MeetupModel } from "../../models/MeetupModel";
import { FavoritesContext } from "../../store/favorites-context";
import { Card } from "../ui/Card";
import classes from "./MeetupItem.module.css";

export const MeetupItem: React.FC<{ meetupModel: MeetupModel }> = (props) => {

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.meetupModel.id);

  const toggleFavoriteStatusHandler = () => {
    
  }

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
          <button onClick={toggleFavoriteStatusHandler}>To Favorites</button>
        </div>
      </li>
    </Card>
  );
};
