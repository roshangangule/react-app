import { useEffect, useState } from "react";
import { MeetupList } from "../components/meetups/MeetupList";

export const AllMeetups: React.FC<{}> = () => {
  const [isLoadiong, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-getting-started-4b013-default-rtdb.firebaseio.com/meetup.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups: any = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoadiong) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h2>All Meetups</h2>
      <MeetupList meetupList={loadedMeetups} />
    </div>
  );
};
