import { useState } from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

export const Todo: React.FC<{ text: any }> = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  }
  const handleModalIsOpen = () => {
    setModalIsOpen(false);
  }
  const handleOnCancel = () => {
    setModalIsOpen(false);
  }
  const handleOnConfirm = () => {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={handleOnCancel} onConfirm={handleOnConfirm}/>}
      {modalIsOpen && <Backdrop onCancel = {handleModalIsOpen}/>}
      
    </div>
  );
};
