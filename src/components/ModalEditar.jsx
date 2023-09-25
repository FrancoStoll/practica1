import React from "react";
import Modal from "react-modal";
import useBoleta from "../hooks/useBoleta";
import Formulario from "./Formulario";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "50%",
    maxWidth: "50%",
  },
};

Modal.setAppElement("#root");

const ModalEditar = () => {
  const { modal, setModal, handleForm, handleSubmit, datos } = useBoleta();

  return (
    <>
      <Modal isOpen={modal} style={customStyles}>
        <Formulario />
      </Modal>
    </>
  );
};

export default ModalEditar;
