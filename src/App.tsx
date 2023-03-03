import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { MainNavigation } from "./components/layout/MainNavigation";
import { Todo } from "./components/Todo";
import { AllMeetups } from "./pages/AllMeetups";
import { Favorites } from "./pages/Favorites";
import { NewMeetup } from "./pages/NewMeetup";

export const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact><AllMeetups /></Route>
        <Route path="/new-meetup"><NewMeetup /></Route>
        <Route path="/favorites"><Favorites /></Route>
      </Switch>
    </Layout>
  );
};
