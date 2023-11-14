import React from "react";
import "../styles/Paginacion.css";

function ControlesPaginacion({
  paginaActual,
  totalPaginas,
  irAAnteriorPagina,
  irAPagina,
  irASiguientePagina,
  indiceFinal,
  personajeLength,
}) {
  return (
    <div className="controles-paginacion">
      <div className="botones">
        <button onClick={irAAnteriorPagina} disabled={paginaActual === 1}>
          Anterior
        </button>
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => irAPagina(index + 1)}
            className={index + 1 === paginaActual ? "pagina-actual" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={irASiguientePagina}
          disabled={
            indiceFinal >= personajeLength || paginaActual >= totalPaginas
          }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ControlesPaginacion;
