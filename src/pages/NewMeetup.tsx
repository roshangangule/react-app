import { useHistory } from "react-router-dom";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export const NewMeetup: React.FC<{}> = () => {

    const history = useHistory();

    const addMeetupHandler = (meetupData: any) => {
        fetch('https://react-getting-started-4b013-default-rtdb.firebaseio.com/meetup.json', {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => history.replace('/'));
    }
    return (
        <div>
           <h1>Add New Meetup</h1>
           <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    );
}