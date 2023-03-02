import "./App.css";
import { Todo } from "./components/Todo";

export const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text = "Learn React"/>
      <Todo text = "Master React" />
    </div>
  );
};
