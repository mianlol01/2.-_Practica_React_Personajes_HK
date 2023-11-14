import React from "react";
import "../styles/Controles.css";

function ControlesFiltro({
  categoriaSeleccionada,
  cambiarCategoria,
  categoriasDisponibles,
}) {
  return (
    <div className="controles">
      <span>Filtrar por categoría:</span>
      <select
        value={categoriaSeleccionada}
        onChange={(e) => cambiarCategoria(e.target.value)}
      >
        {categoriasDisponibles.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ControlesFiltro;