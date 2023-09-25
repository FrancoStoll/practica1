import React from "react";
import useBoleta from "../hooks/useBoleta";

const Error = () => {
  const { error } = useBoleta();
  return (
    <div className="ml-4">
      {error && (
        <p
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative text-center"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Error;
