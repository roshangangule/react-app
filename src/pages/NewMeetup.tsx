import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export const NewMeetup: React.FC<{}> = () => {
    const addMeetupHandler = (meetupData: any) => {

    }
    return (
        <div>
           <h1>Add New Meetup</h1>
           <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    );
}