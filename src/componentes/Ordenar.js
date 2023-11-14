import React from "react";
import "../styles/Controles.css";

function ControlesOrden({ ordenSeleccionado, cambiarOrden }) {
  return (
    <div className="controles">
      <span>Ordenar por nombre:</span>
      <select value={ordenSeleccionado} onChange={(e) => cambiarOrden(e.target.value)}>
        <option value="default">Predeterminado</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
}

export default ControlesOrden;