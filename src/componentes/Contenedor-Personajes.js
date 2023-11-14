import React, { useState } from "react";
import personaje from "../objetos/Personajes.js";
import ElementoPersonaje from "./Elemento-Personajes.js";
import ControlesFiltro from "./Filtro.js";
import ControlesOrden from "./Ordenar.js";
import ControlesPaginacion from "./Paginacion.js";
import "../styles/ContenedorPersonaje.css";

function ContenedorPersonaje() {
  const elementosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [ordenSeleccionado, setOrdenSeleccionado] = useState("default");

  const categoriasDisponibles = Array.from(
    new Set(personaje.map((p) => p.categoria))
  );
  categoriasDisponibles.unshift("Todas");

  const totalPaginas = Math.ceil(
    personaje
      .filter(
        (personaje) =>
          categoriaSeleccionada === "Todas" ||
          personaje.categoria === categoriaSeleccionada
      )
      .sort((a, b) => {
        if (ordenSeleccionado === "A-Z") {
          return a.nombre.localeCompare(b.nombre);
        } else if (ordenSeleccionado === "Z-A") {
          return b.nombre.localeCompare(a.nombre);
        }
        // Orden predeterminado (sin orden)
        return 0;
      }).length / elementosPorPagina
  );

  const irAPagina = (numeroPagina) => {
    if (numeroPagina > 0 && numeroPagina <= totalPaginas) {
      setPaginaActual(numeroPagina);
    }
  };

  const cambiarCategoria = (nuevaCategoria) => {
    setCategoriaSeleccionada(nuevaCategoria);
    setPaginaActual(1);
  };

  const cambiarOrden = (nuevoOrden) => {
    setOrdenSeleccionado(nuevoOrden);
    setPaginaActual(1);
  };

  const indiceInicial = (paginaActual - 1) * elementosPorPagina;
  const indiceFinal = paginaActual * elementosPorPagina;

  const elementosEnPagina = personaje
    .filter(
      (personaje) =>
        categoriaSeleccionada === "Todas" ||
        personaje.categoria === categoriaSeleccionada
    )
    .sort((a, b) => {
      if (ordenSeleccionado === "A-Z") {
        return a.nombre.localeCompare(b.nombre);
      } else if (ordenSeleccionado === "Z-A") {
        return b.nombre.localeCompare(a.nombre);
      }
      // Orden predeterminado (sin orden)
      return 0;
    })
    .slice(indiceInicial, indiceFinal);

  const irASiguientePagina = () => {
    if (indiceFinal < personaje.length && paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const irAAnteriorPagina = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className="div-global">
      <div className="div-controles">
        <ControlesFiltro
          categoriaSeleccionada={categoriaSeleccionada}
          cambiarCategoria={cambiarCategoria}
          categoriasDisponibles={categoriasDisponibles}
        />
        <ControlesOrden
          ordenSeleccionado={ordenSeleccionado}
          cambiarOrden={cambiarOrden}
        />
      </div>
      <div className="div-contenedor">
        <div className="div-elementos">
          {elementosEnPagina.map((personaje) => (
            <ElementoPersonaje key={personaje.nombre} {...personaje} />
          ))}
        </div>
      </div>
      <ControlesPaginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        irAAnteriorPagina={irAAnteriorPagina}
        irAPagina={irAPagina}
        irASiguientePagina={irASiguientePagina}
        indiceFinal={indiceFinal}
        personajeLength={personaje.length}
      />
    </div>
  );
}

export default ContenedorPersonaje;
