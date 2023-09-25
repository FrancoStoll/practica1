import useBoleta from "../hooks/useBoleta";
import Error from "./Error";

const Formulario = () => {
  const { handleSubmit, datos, handleForm, modal, error } = useBoleta();

  return (
    <>
      <div className={`${modal ? "w-full" : " w-full md:w-1/2 lg:w-2/5 mx-5"}`}>
        <Error />
        <p className="font-black text-xl p-2 text-center mb-6">
          Ingresar Datos
        </p>
        <form className="shadow-md" onSubmit={handleSubmit}>
          <div className="p-5">
            <label
              className="block font-bold mb-3 uppercase"
              htmlFor="producto"
            >
              Nombre del producto
            </label>

            <input
              placeholder="Shampoo"
              className="my-3 block w-full p-2 bg-gray-50 rounded-sm "
              type="text"
              value={datos?.nombre}
              onChange={handleForm}
              name="nombre"
            />

            <label className="block font-bold mb-3 uppercase" htmlFor="precio">
              Precio:
            </label>
            <input
              name="precio"
              id="precio"
              placeholder="ej: 1200"
              value={datos?.precio}
              onChange={handleForm}
              type="text"
              className="my-3 block w-full p-2 bg-gray-50 rounded-sm "
            />

            <label
              className="block font-bold mb-3 uppercase"
              htmlFor="cantidad"
            >
              Cantidad:
            </label>
            <input
              name="cantidad"
              value={datos?.cantidad}
              id="cantidad"
              placeholder="ej: 5"
              onChange={handleForm}
              type="text"
              className="my-3 block w-full p-2 bg-gray-50 rounded-sm "
            />

            <label
              className="block font-bold mb-3 uppercase"
              htmlFor="categoria"
            >
              Categoria
            </label>
            <select
              name="categoria"
              className="my-3 block w-full p-2 bg-gray-50 rounded-sm "
              value={datos?.categoria}
              id="categoria"
              onChange={handleForm}
            >
              <option className="text-center" value="">
                -- Seleccionar --
              </option>
              <option className="text-center" value="comida">
                Comida
              </option>
              <option className="text-center" value="bebida">
                Bebida
              </option>
              <option className="text-center" value="postres">
                Postres
              </option>
              <option className="text-center" value="cocina">
                Cocina
              </option>
              <option className="text-center" value="limpieza">
                Limpieza
              </option>
              <option className="text-center" value="higiene">
                Higiene
              </option>
            </select>

            <input
              type="submit"
              value={`${modal ? "Guardar cambios" : "Cargar producto"}`}
              className="bg-blue-600 p-3 w-full text-white uppercase text-md font-bold mt-5 hover:bg-blue-900 rounded-xl shadow-md "
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
