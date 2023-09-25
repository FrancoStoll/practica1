import React, { createContext, useEffect, useState } from "react";
import { idGenerator } from "../helpers/idGenerator";
import { toast } from "react-toastify";

const BoletaContext = createContext();

const BoletaProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [boleta, setBoleta] = useState([]);
  const [datos, setDatos] = useState({
    nombre: "",
    precio: "",
    cantidad: "",
    categoria: "",
  });

  const handleForm = (event) => {
    const { target } = event;

    setDatos({ ...datos, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!datos.id) {
      datos.id = idGenerator();
    }

    if (Object.values(datos).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (boleta.some((producto) => producto.id === datos.id)) {
      const boletaActualizada = boleta.map((producto) => {
        if (producto.id === datos.id) {
          return datos;
        } else {
          return producto;
        }
      });
      toast.success("Actualizado correctamente");
      setBoleta(boletaActualizada);
      setDatos({
        nombre: "",
        precio: "",
        cantidad: "",
        categoria: "",
      });
      setModal(false);
      return;
    } else {
      setError("");
      toast.success("Se agrego un nuevo producto");
      setBoleta([...boleta, datos]);
      setDatos({
        nombre: "",
        precio: "",
        cantidad: "",
        categoria: "",
      });

      return;
    }
  };

  const handleEliminar = (id) => {
    const boletaActualizada = boleta.filter((producto) => producto.id !== id);

    setBoleta(boletaActualizada);
    toast.success("Eliminado correctamente");
  };

  const handleModal = (producto) => {
    setModal(true);

    if (boleta.some((productoState) => productoState.id === producto.id)) {
      setDatos(producto);
    }
  };

  const handleReset = () => {
    setBoleta([]);
    setDatos({
      nombre: "",
      precio: "",
      cantidad: "",
      categoria: "",
    });
  };

  const handleImprimir = () => {
    const imprimir = toast.loading('Imprimiendo')

    setTimeout(() => {
      toast.dismiss(imprimir)
    }, 2000);
  }

  return (
    <BoletaContext.Provider
      value={{
        datos,
        handleForm,
        handleSubmit,
        boleta,
        error,
        handleEliminar,
        modal,
        setModal,
        handleModal,
        handleReset,
        handleImprimir,
      }}
    >
      {children}
    </BoletaContext.Provider>
  );
};

export { BoletaProvider };

export default BoletaContext;
