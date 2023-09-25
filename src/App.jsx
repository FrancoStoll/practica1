import ReactModal from "react-modal";
import Boleta from "./components/Boleta";
import Formulario from "./components/Formulario";
import Header from "./components/header";
import { BoletaProvider } from "./context/BoletaProvider";
import useBoleta from "./hooks/useBoleta";
import Modal from "react-modal";
import ModalEditar from "./components/ModalEditar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BoletaProvider>
      <Header />

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
