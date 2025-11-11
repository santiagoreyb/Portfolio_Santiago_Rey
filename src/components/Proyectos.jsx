import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NeonCat,
  EcoGuardians,
  WhereIsIt,
  UniversityAdmissions,
  Vinos,
  CuantoNecesito,
  MultiActivityApp,
  MedicionAgua,
  Portafolio,
  Kakkuro,
  Tablut,
  Solar,
  FastE,
  FastU
} from "../assets/Proyectos/images";


function Proyectos({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const proyectos = [
  {
    titulo: "NeonCat",
    descripcion: "Videojuego desarrollado en Unity para el GameJam de la Sociedad Colombiana de Ingenieros. Incluye mecánicas de juego innovadoras, diseño de niveles y modelado 3D de personajes con Blender.",
    fecha: "Dic 2024 - Ene 2025",
    imagenes: [NeonCat.neoncat1, NeonCat.neoncat2],
    tecnologias: [
      { name: "C#", logo: "icon-c-sharp-logo" },
      { name: "Unity", logo: "icon-unity" },
      { name: "Blender", logo: "icon-blender-3d" },
      { name: "Illustrator", logo: "icon-adobe-illustrator" },
      { name: "Photoshop", logo: "icon-adobe-photoshop" },
    ],
    repo: "https://github.com/NeonCat-Game/NeonCat",
    demo: "https://santiagoreyb.itch.io/neoncat",
  },
  {
    titulo: "EcoGuardians 2.0",
    descripcion: "Videojuego 3D interactivo que promueve la conservación ambiental, recreando la Estación Biológica del Norte de Caldas. Integración de gráficos realistas, interacciones en tiempo real y despliegue web con React y Azure.",
    fecha: "Feb 2024 - Nov 2024",
    imagenes: [EcoGuardians.eco1, EcoGuardians.eco2, EcoGuardians.eco3],
    tecnologias: [
      { name: "C#", logo: "icon-c-sharp-logo" },
      { name: "Unity", logo: "icon-unity" },
      { name: "React", logo: "icon-react" },
      { name: "Blender", logo: "icon-blender-3d" },
      { name: "Illustrator", logo: "icon-adobe-illustrator" },
      { name: "Photoshop", logo: "icon-adobe-photoshop" },
      { name: "Azure", logo: "icon-azure-1" },
    ],
    repo: "https://gitlab.com/ecoguardians/Game-EcoGuardians-2.0",
    demo: "https://ecoguardians-kappa.vercel.app/",
  },
  {
    titulo: "CuantoNecesitoPUJ",
    descripcion: "Aplicación web que calcula la nota mínima necesaria para aprobar materias, ayudando a estudiantes a planificar su rendimiento académico. Implementa Angular, consumo de REST APIs y diseño de interfaz responsiva.",
    fecha: "Feb 2021 - Jun 2021",
    imagenes: [CuantoNecesito.cuanto1, CuantoNecesito.cuanto2, CuantoNecesito.cuanto3],
    tecnologias: [
      { name: "Angular", logo: "icon-angularjs" },
      { name: "HTML", logo: "icon-html-5" },
      { name: "CSS", logo: "icon-css3" },
      { name: "Typescript", logo: "icon-typescript" },
      { name: "REST API", logo: "icon-api-settings" },
    ],
    repo: "https://github.com/CapituloJaverianoACM/cuanto-necesito-PUJ",
  },
  {
    titulo: "Redes Neuronales - Clasificación de Vinos",
    descripcion: "Proyecto de machine learning para predecir la calidad del vino utilizando redes neuronales feed-forward y el dataset Wine Quality (UCI). Incluye preprocesamiento de datos con Pandas y NumPy, y entrenamiento de modelos con TensorFlow.",
    fecha: "2023",
    imagenes: [
      Vinos.vino1, Vinos.vino2, Vinos.vino3,
      Vinos.vino4, Vinos.vino5, Vinos.vino6
    ],
    tecnologias: [
      { name: "Python", logo: "icon-python" },
      { name: "Machine Learning", logo: "icon-brain-3" },
      { name: "TensorFlow", logo: "icon-tensorflow" },
      { name: "Pandas", logo: "icon-pandas" },
      { name: "NumPy", logo: "icon-numpy" },
    ],
    repo: "https://github.com/santiagoreyb/Redes_Neuronales",
  },
  {
    titulo: "WhereIsIt",
    descripcion: "Aplicación móvil para rastreo de dispositivos en tiempo real, con autenticación de usuarios, roles y geolocalización. Desarrollada en Kotlin y Firebase, integrando Google Maps y OpenStreetMap para visualización interactiva.",
    fecha: "2024",
    imagenes: [
      WhereIsIt.where1, WhereIsIt.where2, WhereIsIt.where3, WhereIsIt.where4
    ],
    tecnologias: [
      { name: "Kotlin", logo: "icon-kotlin" },
      { name: "Android Studio", logo: "icon-android-studio" },
      { name: "XML UI", logo: "icon-xml" },
      { name: "Firebase", logo: "icon-firebase" },
      { name: "Google Maps API", logo: "icon-google-maps-new" },
      { name: "OSM API", logo: "icon-map-marker" },
    ],
    repo: "https://github.com/santiagoreyb/WhereIsIt",
  },
  {
    titulo: "University Admissions",
    descripcion: "Sistema para gestión de aspirantes universitarios, consultas de pagos y verificación de registros. Implementado con .NET y Oracle DB, con interfaz intuitiva y manejo seguro de datos.",
    fecha: "2024",
    imagenes: [
      UniversityAdmissions.university1,
      UniversityAdmissions.university2,
      UniversityAdmissions.university3
    ],
    tecnologias: [
      { name: ".NET 8", logo: "icon-net-framework" },
      { name: "Razor Views", logo: "icon-visual-studio" },
      { name: "Oracle DB", logo: "icon-oracle-pl-sql" },
      { name: "PL/SQL", logo: "icon-oracle-pl-sql" },
    ],
    repo: "https://github.com/santiagoreyb/UniversityAdmissions",
  },
  {
    titulo: "MultiActivityApp",
    descripcion: "Aplicación Android con varias actividades para practicar fundamentos de desarrollo móvil, navegación entre pantallas y consumo de APIs geoespaciales usando OpenStreetMap.",
    fecha: "2022",
    imagenes: [
      MultiActivityApp.multi1,
      MultiActivityApp.multi2,
      MultiActivityApp.multi3,
      MultiActivityApp.multi4,
      MultiActivityApp.multi5
    ],
    tecnologias: [
      { name: "Kotlin", logo: "icon-kotlin" },
      { name: "Android Studio", logo: "icon-android-studio" },
      { name: "XML UI", logo: "icon-xml" },
      { name: "OSM API", logo: "icon-map-marker" },
    ],
    repo: "https://github.com/santiagoreyb/MultiActivityApp",
  },
  {
    titulo: "FastEvent",
    descripcion: "Plataforma web para coordinar y gestionar eventos sociales, facilitando la comunicación entre organizadores y proveedores de servicios. Incluye gestión de lugares, catering y otros servicios con interfaz amigable.",
    fecha: "2021",
    imagenes: [FastE.faste1, FastE.faste2, FastE.faste3, FastE.faste4, FastE.faste5, FastE.faste6],
    tecnologias: [
      { name: "JavaFX", logo: "icon-scene-builder" },
      { name: "Scene Builder", logo: "icon-scene-builder" },
      { name: "Java", logo: "icon-java-coffee-cup-logo" },
    ],
    repo: "https://github.com/StiivenOrtiz/FastEvent",
  },
  {
    titulo: "FastU",
    descripcion: "Plataforma integral de pedidos y entregas dentro del entorno universitario, inspirada en modelos como Rappi. Permite a los estudiantes realizar pedidos, a los domiciliarios gestionarlos en tiempo real y a las empresas registrar sus productos, marcas y promociones. ",
    fecha: "2023",
    imagenes: [FastU.fastu1, FastU.fastu2, FastU.fastu3, FastU.fastu4, FastU.fastu5, FastU.fastu6, FastU.fastu7],
    tecnologias: [
      { name: "JavaFX", logo: "icon-scene-builder" },
      { name: "Scene Builder", logo: "icon-scene-builder" },
      { name: "Java", logo: "icon-java-coffee-cup-logo" },
    ],
    repo: "https://github.com/StiivenOrtiz/Fast-U",
  },
  {
    titulo: "Sistema de Medición de Calidad del Agua",
    descripcion: "Proyecto distribuido para monitorear parámetros de calidad del agua como pH, temperatura y turbidez. Implementa comunicación síncrona y asíncrona mediante MQTT y Pub/Sub para sistemas IoT.",
    fecha: "2024",
    imagenes: [MedicionAgua.agua1, MedicionAgua.agua2],
    tecnologias: [
      { name: "C", logo: "icon-c-programming" },
      { name: "MQTT", logo: "icon-cloud-development" },
      { name: "Pub/Sub", logo: "icon-cloud-firestore" },
      { name: "Ubuntu", logo: "icon-ubuntu" },
    ],
    repo: "",
},
{
  titulo: "Kakkuro",
  descripcion: "Rompecabezas lógico estilo crucigrama numérico desarrollado en Python con Tkinter. Los jugadores pueden completar la cuadrícula manualmente o usar una heurística integrada que resuelve automáticamente el puzzle.",
  fecha: "2024",
  imagenes: [Kakkuro.kakkuro1, Kakkuro.kakkuro2, Kakkuro.kakkuro3, Kakkuro.kakkuro4, Kakkuro.kakkuro5, Kakkuro.kakkuro6],
  tecnologias: [
    { name: "Python", logo: "icon-python" },
    { name: "Tkinter", logo: "icon-python" },
  ],
  repo: "https://github.com/santiagoreyb/Kakkuro",
  },
  {
    titulo: "Tablut",
    descripcion: "Juego de mesa digital basado en TABLUT para dos jugadores, gestionando turnos y movimientos de fichas con reglas clásicas del juego nórdico.",
    fecha: "C++ · 2024",
    imagenes: [Tablut.tablut1],
    tecnologias: [
      { name: "C++", logo: "icon-c-plus-plus-logo" },
    ],
    repo: "https://github.com/santiagoreyb/Tablut",
  },
  {
    titulo: "Sistema Solar",
    descripcion: "Simulación interactiva de un sistema solar a escala en Python, incluyendo rotaciones orbitales, satélites, texturas realistas y shaders personalizados. Permite navegación con cámara y control de órbitas. Desarrollado con OpenGL y PyGame.",
    fecha: "2024",
    imagenes: [Solar.system1, Solar.system2, Solar.system3, Solar.system4],
    tecnologias: [
      { name: "Python", logo: "icon-python" },
    ],
    repo: "https://github.com/KironStylo/SolarSystem",
  },
  {
    titulo: "Portafolio Web",
    descripcion: "Portafolio personal desarrollado en React, con modo oscuro, animaciones con Framer Motion y diseño responsive. Presenta proyectos de manera interactiva y moderna.",
    fecha: "2025",
    imagenes: [Portafolio],
    tecnologias: [
      { name: "React", logo: "icon-react" },
      { name: "TailwindCSS", logo: "icon-tailwind_css" },
      { name: "Framer Motion", logo: "icon-innovation" },
      { name: "Vite", logo: "icon-vite" },
    ],
    repo: "https://github.com/santiagoreyb/Portfolio-Santiago-Rey",
  },
];



  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-5 transition-all duration-300 ${
        isOpen ? "min-h-screen" : "h-auto"
      }`}
    >
      {/* Encabezado */}
      <div className="relative mb-6">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-wide text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          🧩 Proyectos
        </h2>

        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className={`absolute right-2 top-0 text-3xl md:text-4xl font-bold ${
            darkMode
              ? "text-white hover:bg-white/10"
              : "text-gray-700 hover:bg-gray-300/50"
          } transition px-2 rounded-md`}
          title={isOpen ? "Cerrar sección" : "Abrir sección"}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      <div
        className={`mx-auto h-[2px] w-full rounded-full ${
          darkMode ? "bg-cyan-300/50" : "bg-gray-500/40"
        }`}
      ></div>

      {/* Contenido */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[5000px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {proyectos.map((proyecto, idx) => (
            <ProyectoCard
              key={idx}
              proyecto={proyecto}
              darkMode={darkMode}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProyectoCard({ proyecto, darkMode, delay }) {
  const [index, setIndex] = useState(0);
  const [fullImage, setFullImage] = useState(null);

  // Si no hay imagenes, usar array con placeholder (ya seteado arriba), pero por seguridad:
  const imgs = proyecto.imagenes && proyecto.imagenes.length ? proyecto.imagenes : [Portafolio.portfolio];

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % imgs.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + imgs.length) % imgs.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl overflow-hidden shadow-lg backdrop-blur-md border transition-all duration-300 ${
        darkMode
          ? "bg-[#0f172a] border-cyan-500/30 hover:border-cyan-400/60"
          : "bg-[#d7dae4] border-gray-300 hover:border-gray-400"
      }`}
    >
{/* Slider */}
<div className="relative h-64 overflow-hidden group">
  <AnimatePresence mode="wait">
    <motion.img
      key={index}
      src={imgs[index]}
      alt={`${proyecto.titulo} ${index}`}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full object-contain bg-black/10"
    />
  </AnimatePresence>

  {/* Botón de ampliar imagen */}
  <button
    onClick={() => setFullImage(imgs[index])}
    className={`absolute top-2 right-2 p-2 rounded-lg text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
      darkMode
        ? "bg-black/50 hover:bg-black/70 text-white"
        : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
    }`}
    title="Ampliar imagen"
  >
    🔳
  </button>

  {imgs.length > 1 && (
    <>
      <button
        onClick={prevImage}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition font-bold text-xl ${
          darkMode
            ? "bg-black/50 hover:bg-black/70 text-white"
            : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
        }`}
      >
        ‹
      </button>
      <button
        onClick={nextImage}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition font-bold text-xl ${
          darkMode
            ? "bg-black/50 hover:bg-black/70 text-white"
            : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
        }`}
      >
        ›
      </button>
    </>
  )}

  {/* Modal de imagen ampliada */}
  <AnimatePresence>
    {fullImage && (
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setFullImage(null)}
      >
        <motion.img
          src={fullImage}
          alt="Vista ampliada"
          className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    )}
  </AnimatePresence>
</div>


      {/* Info */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3
            className={`text-xl font-semibold ${
              darkMode ? "text-cyan-300" : "text-gray-800"
            }`}
          >
            {proyecto.titulo}
          </h3>

          <div className="flex gap-2">
            {proyecto.repo && (
              <a
                href={proyecto.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 transition-transform hover:scale-105 ${
                  darkMode
                    ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                💻 Repo
              </a>
            )}
            {proyecto.demo && (
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 transition-transform hover:scale-105 ${
                  darkMode
                    ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                🚀 Demo
              </a>
            )}
          </div>
        </div>

        <p
          className={`text-sm mb-3 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {proyecto.descripcion}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          {proyecto.tecnologias.map((tec, i) => (
            <div
              key={i}
              className="flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-md bg-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor">
                <use href={`/portfolio.min.svg#${tec.logo}`} />
              </svg>
              <span>{tec.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Proyectos;
