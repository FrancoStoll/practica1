import Boleta from "./components/Boleta";
import Formulario from "./components/Formulario";

import { BoletaProvider } from "./context/BoletaProvider";
import ModalEditar from "./components/ModalEditar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Header from "./components/header";

function App() {
  return (
    <BoletaProvider>
      {/* <Header /> */}

      <div className="text-3xl text-center p-2.5 mb-10">
        <p className="font-bold py-4 ">Crear boleta de compra</p>
      </div>

      <main className="md:flex">
        <Formulario />

        <Boleta />
      </main>

      <ModalEditar />
      <ToastContainer />
    </BoletaProvider>
  );
}

export default App;
