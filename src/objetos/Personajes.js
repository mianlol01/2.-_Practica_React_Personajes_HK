const personaje = [
  {
    imagen: "knight",
    alt: "Imagen del Caballero",
    nombre: "Knight",
    categoria: "Principal",
    resumen:
      "Es el personaje que el jugador controla a lo largo de la historia principal en Hollow Knight.",
  },
  {
    imagen: "hornet",
    alt: "Imagen de Hornet",
    nombre: "Hornet",
    categoria: "NPC",
    resumen:
      "Hornet es la misteriosa princesa protectora de las ruinas de Hallownest; y de los personajes principales.",
  },
  {
    imagen: "hollow-knight",
    alt: "Imagen del Hollow Knight",
    nombre: "Hollow Knight",
    categoria: "Jefe",
    resumen:
      "Es el centro (por decirlo de alguna forma) del viaje del Caballero y la historia de Hallownest.",
  },
  {
    imagen: "pale-king",
    alt: "Imagen del Rey Pálido",
    nombre: "Rey Pálido",
    categoria: "NPC",
    resumen:
      "El Rey Pálido era el monarca de Hallownest, compañero de la Dama Blanca y gobernante del Palacio Blanco.",
  },
  {
    imagen: "white-lady",
    alt: "Imagen de la Dama Blanca",
    nombre: "Dama Blanca",
    categoria: "NPC",
    resumen:
      "Se sospecha que se trata de la reina de Hallownest, debido a su localización, diálogo y contexto.",
  },
  {
    imagen: "elderbug",
    alt: "Imagen del Viejo Indecto",
    nombre: "Viejo Insecto",
    categoria: "NPC",
    resumen:
      "El residente más anciano de Bocasucia, es amable con todos los viajantes que buscan entrar al Reino.",
  },
  {
    imagen: "cornifer",
    alt: "Imagen de Cornifer",
    nombre: "Cornifer",
    categoria: "Errante",
    resumen:
      "Cornifer se encuentra en todas las zonas donde es posible conseguir un mapa. Los papeles en el suelo y su tarareo revelan su posición.",
  },
  {
    imagen: "sly",
    alt: "Imagen de Sly",
    nombre: "Sly",
    categoria: "Comerciante",
    resumen:
      "Tras despertarlo hablando con él, vuelve a Bocasucia para abrir su tienda.",
  },
  {
    imagen: "quirrel",
    alt: "Imagen de Quirrel",
    nombre: "Quirrel",
    categoria: "Errante",
    resumen:
      "Es un viejo explorador que ha olvidado su pasado de forma literal y ahora busca conocer los misterios de Hallownest.",
  },
  {
    imagen: "confessora-jiji",
    alt: "Imagen de la Confesora Jiji",
    nombre: "Confesora Jiji",
    categoria: "Comerciante",
    resumen:
      "A cambio de Huevos podridos, traerá la Sombra del Caballero desde cualquier lugar.",
  },
  {
    imagen: "iselda",
    alt: "Imagen de Iselda",
    nombre: "Iselda",
    categoria: "Comerciante",
    resumen:
      "Vende mapas y herramientas para cartografiar mientras se queja del poco tiempo que Cornifer pasa en casa.",
  },
  {
    imagen: "comepiernas",
    alt: "Imagen del Comepiernas",
    nombre: "Comepiernas",
    categoria: "Comerciante",
    resumen:
      "Un comerciante NPC que se encuentra en Páramos Fúngicos, cerca de la entrada a Cruces Olvidados.",
  },
  {
    imagen: "pequeño-insensato",
    alt: "Imagen del Pequeño Insensato",
    nombre: "Pequeño Insensato",
    categoria: "Comerciante",
    resumen:
      "Se encuentra encadenado, colgado boca abajo en el Coliseo de los Insensatos. Informa al Caballero sobre las reglas del Coliseo.",
  },
  {
    imagen: "millibelle",
    alt: "Imagen de Millibelle",
    nombre: "Millibelle",
    categoria: "Comerciante",
    resumen:
      "En la base de Cañón Nublado se encuentra el Banco de Millibelle, donde a cambio de una tarifa inicial de Geo100 guardará el Geo del Caballero. ",
  },
  {
    imagen: "forjaguijones",
    alt: "Imagen del Forjaguijones",
    nombre: "Forjaguijones",
    categoria: "Comerciante",
    resumen:
      "Se encuentra en Ciudad de Lágrimas, al fondo a la izquierda de la parte inferior del mapa dentro de su choza.",
  },
  {
    imagen: "lemm",
    alt: "Imagen de Lemm",
    nombre: "Lemm",
    categoria: "Comerciante",
    resumen:
      "Buscador de Reliquias Lemm se encuentra en una alta torre en Ciudad de Lágrimas, a la izquierda de la fuente.",
  },
  {
    imagen: "salubra",
    alt: "Imagen de Salubra",
    nombre: "Salubra",
    categoria: "Comerciante",
    resumen:
      "Ella es experimentada en la creación y uso de Amuletos y ansiosamente los comparte con otros a cambio de Geo.",
  },
  {
    imagen: "jinn",
    alt: "Imagen de Jinn",
    nombre: "Jinn",
    categoria: "Comerciante",
    resumen:
      "Alma de Acero Jinn es un NPC exclusivo del Modo Alma de Acero, que reemplaza al Confesor Jiji en la cueva en el extremo este de Bocasucia.",
  },
  {
    imagen: "ciervo",
    alt: "Imagen del El último ciervo",
    nombre: "El último ciervo",
    categoria: "Comerciante",
    resumen:
      "El Último Ciervo es un gran escarabajo que ayuda a El Caballero a viajar entre Bocasucia y otras Estaciones de ciervos en Hallownest.",
  },
  {
    imagen: "tuk",
    alt: "Imagen de Tuk",
    nombre: "Tuk",
    categoria: "Comerciante",
    resumen:
      "Encontrado en la basura en los Canales Reales, detrás de una pared rompible en la esquina superior derecha del área. Vende Huevos podridos por 80-100 Geos.",
  },
  {
    imagen: "mato",
    alt: "Imagen de Mato",
    nombre: "Mato",
    categoria: "Maestro",
    resumen:
      "El Maestro de aguijones Mato es uno de los 3 Maestros de aguijones que enseñan las Artes del aguijón.",
  },
  {
    imagen: "oro",
    alt: "Imagen de Oro",
    nombre: "Oro",
    categoria: "Maestro",
    resumen:
      "El Maestro de aguijones Oro es uno de los 3 Maestros de aguijones que enseñan las Artes del aguijón.",
  },
  {
    imagen: "sheo",
    alt: "Imagen de Sheo",
    nombre: "Sheo",
    categoria: "Maestro",
    resumen:
      "El Maestro de aguijones Sheo es uno de los 3 Maestros de aguijones que enseñan las Artes del aguijón.",
  },
  {
    imagen: "cloth",
    alt: "Imagen de Cloth",
    nombre: "Cloth",
    categoria: "Errante",
    resumen:
      "Una cigarra que viaja a Hallownest para convertirse en una verdadera guerrera.",
  },
  {
    imagen: "seta",
    alt: "Imagen del Señor Seta",
    nombre: "Señor Seta",
    categoria: "Errante",
    resumen:
      "El Señor Seta es una seta parlante que se encuentra a través de varios lugares en Hallownest después de que el jugador ha progresado más allá de cierto punto.",
  },
  {
    imagen: "tiso",
    alt: "Imagen de Tiso",
    nombre: "Tiso",
    categoria: "Errante",
    resumen: "Tiso es un aventurero en busca del Coliseo de los Insensatos.",
  },
  {
    imagen: "zote",
    alt: "Imagen de Zote el Todopoderoso",
    nombre: "Zote el Todopoderoso",
    categoria: "Errante",
    resumen:
      "Zote es un viajero de las afueras de Hallownest. Él vino al reino para cumplir una promesa.",
  },
  {
    imagen: "bretta",
    alt: "Imagen de Bretta",
    nombre: "Bretta",
    categoria: "NPC",
    resumen:
      "Bretta es un escarabajo que se encuentra en Páramos Fúngicos, sentada sola en la oscuridad.",
  },
  {
    imagen: "doliente-gris",
    alt: "Imagen de la Doliente Gris",
    nombre: "Doliente Gris",
    categoria: "NPC",
    resumen:
      "La Doliente Gris se encuentra al este de Tierras de Reposo, tras unos muros destructibles.",
  },
  {
    imagen: "vidente",
    alt: "Imagen de la Vidente",
    nombre: "Vidente",
    categoria: "NPC",
    resumen:
      "La vidente es una polilla que se encuentra en Tierra de Reposo. Lleva al Caballero a su casa después de que éste escape del mundo onírico.",
  },
  {
    imagen: "padre-larva",
    alt: "Imagen del Padre Larva",
    nombre: "Padre Larva",
    categoria: "NPC",
    resumen:
      "El Padre Larva es un NPC que se encuentra al noroeste de Cruces Olvidados. Recompensará al Caballero por cada larva liberada.",
  },
  {
    imagen: "bardoon",
    alt: "Imagen de Bardoon",
    nombre: "Bardoon",
    categoria: "NPC",
    resumen:
      "Es una oruga gigante que se encuentra en Límite del Reino.",
  },
  {
    imagen: "defensor",
    alt: "Imagen del Defensor del Estiércol",
    nombre: "Defensor del Estiércol",
    categoria: "NPC",
    resumen:
      "Un hábil guerrero que vive en el corazón de los Canales. Ataca a los intrusos con esferas compactas de estiércol.",
  },
  {
    imagen: "emilitia",
    alt: "Imagen de Emilitia",
    nombre: "Emilitia",
    categoria: "NPC",
    resumen:
      "Emilitia es una NPC que se aparece sentada y riéndose sola en una sala secreta de Ciudad de Lágrimas.",
  },
  {
    imagen: "fabricante",
    alt: "Imagen del Fabricante de máscaras",
    nombre: "Fabricante de máscaras",
    categoria: "NPC",
    resumen:
      "Se encuentra al Noroeste de Nido Profundo. Sentado en una sala llena de máscaras.",
  },
  {
    imagen: "matrona",
    alt: "Imagen de la Matrona",
    nombre: "Matrona",
    categoria: "NPC",
    resumen:
      "La Matrona es un NPC de Hollow Knight. da historia de Herrah y el Nido Profundo.",
  },
  {
    imagen: "profeta",
    alt: "Imagen del Profeta del Musgo",
    nombre: "Profeta del Musgo",
    categoria: "NPC",
    resumen:
      "El Profeta del Musgo se encuentra predicando sobre El Destello a un grupo de Vagabundos musgosos en los Jardines de la Reina.",
  },
  {
    imagen: "myla",
    alt: "Imagen de Myla",
    nombre: "Myla",
    categoria: "NPC",
    resumen:
      "Myla es un NPC de Hollow Knight. Es una pequeña y feliz minera que busca tesoros en la entrada a la Cumbre de Cristal.",
  },
  {
    imagen: "chaman",
    alt: "Imagen del Chamán Caracol",
    nombre: "Chamán Caracol",
    categoria: "NPC",
    resumen:
      "Se encuentra en el Montículo Ancestral de Cruces Olvidados.",
  },
  {
    imagen: "cazador",
    alt: "Imagen de El Cazador",
    nombre: "El Cazador",
    categoria: "NPC",
    resumen:
      "El Cazador es una criatura camuflada que se encuentra en Sendero Verde.",
  },
  {
    imagen: "unn",
    alt: "Imagen de Unn",
    nombre: "Unn",
    categoria: "NPC",
    resumen:
      "Unn es una babosa gigante NPC que se encuentra en un charco de ácido en la porción suroeste del Lago de Unn.",
  },
  {
    imagen: "willoh",
    alt: "Imagen de Willoh",
    nombre: "Willoh",
    categoria: "NPC",
    resumen:
      "Willoh es un gorgojo jirafa que encontró un hongo único que crecía en la estación de la Reina.",
  },

];

export default personaje;
