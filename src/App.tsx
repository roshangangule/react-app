import React from "react";
import "./App.css";
import { Backdrop } from "./components/Backdrop";
import { Modal } from "./components/Modal";
import { Todo } from "./components/Todo";

export const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text = "Learn React"/>
      <Todo text = "Master React" />
      <Modal />
      <Backdrop />
    </div>
  );
};
