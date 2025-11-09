import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import javeriana from "../assets/pictures/javeriana.png";
import awaq from "../assets/pictures/javeriana.png";
import unity from "../assets/pictures/javeriana.png";
import android from "../assets/pictures/javeriana.png";
import net from "../assets/pictures/javeriana.png";
import python from "../assets/pictures/javeriana.png";
import portfolio from "../assets/pictures/javeriana.png";

function Proyectos({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const proyectos = [
    {
      titulo: "NeonCat",
      descripcion:
        "Desarrollo de un videojuego en Unity para el GameJam de la Sociedad Colombiana de Ingenieros (SCI).",
      fecha: "Dic 2024 - Ene 2025",
      imagenes: [unity, awaq],
      tecnologias: [
        { name: "C#", logo: "icon-c-sharp-logo" },
        { name: "Unity", logo: "icon-unity" },
        { name: "Blender", logo: "icon-blender-3d" },
      ],
      repo: "https://github.com/santiagoreyb/NeonCat",
      demo: "https://itch.io/neoncat",
    },
    {
      titulo: "EcoGuardians 2.0",
      descripcion:
        "Videojuego 3D interactivo que promueve la conservación ambiental, recreando virtualmente la Estación Biológica del Norte de Caldas. Desarrollado con AWAQ ONGD.",
      fecha: "Feb 2024 - Nov 2024",
      imagenes: [awaq, unity],
      tecnologias: [
        { name: "C#", logo: "icon-c-sharp-logo" },
        { name: "Unity", logo: "icon-unity" },
        { name: "Blender", logo: "icon-blender-3d" },
        { name: "Illustrator", logo: "icon-adobe-illustrator" },
        { name: "Photoshop", logo: "icon-adobe-photoshop" },
      ],
      demo: "https://awaqongd.itch.io/ecoguardians",
    },
    {
      titulo: "CuantoNecesitoPUJ",
      descripcion:
        "Aplicación web desarrollada con el grupo estudiantil ACM Javeriana. Permite calcular la nota mínima para aprobar una materia, mejorando la planificación académica.",
      fecha: "Feb 2021 - Jun 2021",
      imagenes: [javeriana],
      tecnologias: [
        { name: "Angular", logo: "icon-angularjs" },
        { name: "HTML", logo: "icon-html-5" },
        { name: "CSS", logo: "icon-css3" },
        { name: "JavaScript", logo: "icon-javascript" },
        { name: "REST API", logo: "icon-api-settings" },
      ],
      repo: "https://github.com/santiagoreyb/CuantoNecesitoPUJ",
    },
    {
      titulo: "Redes Neuronales - Clasificación de Vinos",
      descripcion:
        "Proyecto de machine learning que analiza la calidad del vino utilizando redes neuronales feed-forward con el dataset Wine Quality (UCI).",
      fecha: "2023",
      imagenes: [python],
      tecnologias: [
        { name: "Python", logo: "icon-python" },
        { name: "TensorFlow", logo: "icon-tensorflow" },
        { name: "Pandas", logo: "icon-pandas" },
        { name: "NumPy", logo: "icon-numpy" },
      ],
      repo: "https://github.com/santiagoreyb/Redes_Neuronales",
    },
    {
      titulo: "Organizador de Fotos",
      descripcion:
        "Programa en Python que organiza automáticamente fotos y videos por la fecha en que fueron tomados.",
      fecha: "2023",
      imagenes: [python],
      tecnologias: [
        { name: "Python", logo: "icon-python" },
        { name: "OS", logo: "icon-server-windows" },
        { name: "Datetime", logo: "icon-calendar" },
      ],
      repo: "https://github.com/santiagoreyb/Organizador_Fotos",
    },
    {
      titulo: "WhereIsIt",
      descripcion:
        "Aplicación móvil para seguimiento de dispositivos, con autenticación, roles y geolocalización. Desarrollada en Kotlin con Firebase y APIs de Google Maps y OSM.",
      fecha: "2024",
      imagenes: [android],
      tecnologias: [
        { name: "Kotlin", logo: "icon-kotlin" },
        { name: "Firebase", logo: "icon-firebase" },
        { name: "Google Maps", logo: "icon-google-maps-new" },
        { name: "OSM", logo: "icon-map-marker" },
      ],
      repo: "https://github.com/santiagoreyb/WhereIsIt",
    },
    {
      titulo: "University Admissions",
      descripcion:
        "Aplicación para gestión de aspirantes universitarios, consultas de pagos y registros de verificación. Implementada con .NET y Oracle Database.",
      fecha: "2024",
      imagenes: [net],
      tecnologias: [
        { name: ".NET 8", logo: "icon-net-framework" },
        { name: "Razor Views", logo: "icon-visual-studio" },
        { name: "Oracle DB", logo: "icon-oracle-logo" },
      ],
      repo: "https://github.com/santiagoreyb/University-Admissions",
    },
    {
      titulo: "MultiActivityApp",
      descripcion:
        "Aplicación Android con múltiples actividades para practicar fundamentos de desarrollo móvil en Android Studio.",
      fecha: "2022",
      imagenes: [android],
      tecnologias: [
        { name: "Kotlin", logo: "icon-kotlin" },
        { name: "Android Studio", logo: "icon-android-studio" },
        { name: "XML UI", logo: "icon-xml" },
      ],
      repo: "https://github.com/santiagoreyb/MultiActivityApp",
    },
    {
      titulo: "Sistema de Medición de Calidad del Agua",
      descripcion:
        "Proyecto distribuido que monitorea parámetros como PH, temperatura y turbidez usando patrones de comunicación síncronos y asíncronos (Pub/Sub).",
      fecha: "2024",
      imagenes: [python],
      tecnologias: [
        { name: "Python", logo: "icon-python" },
        { name: "MQTT", logo: "icon-cloud-development" },
        { name: "Pub/Sub", logo: "icon-cloud-firestore" },
        { name: "IoT", logo: "icon-external-iot-fintech-becris-lineal-color-becris" },
      ],
      repo: "https://github.com/santiagoreyb/WaterQualitySystem",
    },
    {
      titulo: "Portafolio Web",
      descripcion:
        "Diseño y desarrollo de este portafolio en React con animaciones y modo oscuro. Incluye visualización dinámica de proyectos e integración con Framer Motion.",
      fecha: "2025",
      imagenes: [portfolio],
      tecnologias: [
        { name: "React", logo: "icon-react" },
        { name: "TailwindCSS", logo: "icon-tailwind_css" },
        { name: "Framer Motion", logo: "icon-innovation" },
        { name: "Vite", logo: "icon-vite" },
      ],
      repo: "https://github.com/santiagoreyb/portfolio",
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

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % proyecto.imagenes.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + proyecto.imagenes.length) % proyecto.imagenes.length);

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
      <div className="relative h-56 overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={proyecto.imagenes[index]}
            alt={`${proyecto.titulo} ${index}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {proyecto.imagenes.length > 1 && (
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
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className={`text-xl font-semibold mb-2 ${
            darkMode ? "text-cyan-300" : "text-gray-800"
          }`}
        >
          {proyecto.titulo}
        </h3>
        <p
          className={`text-sm mb-3 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {proyecto.descripcion}
        </p>

        {/* Tecnologías */}
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

        {/* Enlaces */}
        <div className="flex gap-3 mt-4">
          {proyecto.repo && (
            <a
              href={proyecto.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold px-3 py-1 rounded-md ${
                darkMode
                  ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              Repo
            </a>
          )}
          {proyecto.demo && (
            <a
              href={proyecto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold px-3 py-1 rounded-md ${
                darkMode
                  ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Proyectos;
