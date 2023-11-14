import React from "react";
import "../styles/ElementoPersonaje.css";

const ElementoPersonaje = ({ imagen, alt, nombre, categoria, resumen }) => {
  return (
    <div className="div-elemento">
      <img className="imagen-elemento" src={require(`../imagenes/${imagen}.webp`)} alt={alt} />
      <div className="texto-elemento">
        <h1 className="nombre-elemento">{nombre}</h1>
        <h2 className="categoria-elemento">{categoria}</h2>
        <p className="resumen-elemento">{resumen}</p>
      </div>
    </div>
  );
};
export default ElementoPersonaje;
