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
        { name: "C#", logo: "csharp" },
        { name: "Unity", logo: "unity" },
        { name: "Blender", logo: "blender" },
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
        { name: "C#", logo: "csharp" },
        { name: "Unity", logo: "unity" },
        { name: "Blender", logo: "blender" },
        { name: "Illustrator", logo: "illustrator" },
        { name: "Photoshop", logo: "photoshop" },
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
        { name: "Angular", logo: "angular" },
        { name: "HTML", logo: "html" },
        { name: "CSS", logo: "css" },
        { name: "JavaScript", logo: "javascript" },
        { name: "REST API", logo: "api" },
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
        { name: "Python", logo: "python" },
        { name: "TensorFlow", logo: "tensorflow" },
        { name: "Pandas", logo: "pandas" },
        { name: "NumPy", logo: "numpy" },
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
        { name: "Python", logo: "python" },
        { name: "OS", logo: "os" },
        { name: "Datetime", logo: "calendar" },
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
        { name: "Kotlin", logo: "kotlin" },
        { name: "Firebase", logo: "firebase" },
        { name: "Google Maps", logo: "googlemaps" },
        { name: "OSM", logo: "osm" },
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
        { name: ".NET 8", logo: "dotnet" },
        { name: "Razor Views", logo: "razor" },
        { name: "Oracle DB", logo: "oracle" },
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
        { name: "Kotlin", logo: "kotlin" },
        { name: "Android Studio", logo: "androidstudio" },
        { name: "XML UI", logo: "xml" },
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
        { name: "Python", logo: "python" },
        { name: "MQTT", logo: "mqtt" },
        { name: "Pub/Sub", logo: "pubsub" },
        { name: "IoT", logo: "iot" },
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
        { name: "React", logo: "react" },
        { name: "TailwindCSS", logo: "tailwindcss" },
        { name: "Framer Motion", logo: "framer" },
        { name: "Vite", logo: "vite" },
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
      <div className="p-5 flex flex-col">
        {/* Título + botones */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <h4
            className={`text-lg font-semibold ${
              darkMode ? "text-cyan-300" : "text-gray-800"
            }`}
          >
            {proyecto.titulo}
          </h4>

          <div className="flex gap-2">
            {proyecto.demo && (
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1 text-xs rounded-md border transition-all ${
                  darkMode
                    ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                    : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                }`}
              >
                🚀 Demo
              </a>
            )}
            {proyecto.repo && (
              <a
                href={proyecto.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1 text-xs rounded-md border transition-all ${
                  darkMode
                    ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                    : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                }`}
              >
                💾 Repo
              </a>
            )}
          </div>
        </div>

        {/* Descripción */}
        <p
          className={`text-sm mb-3 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {proyecto.descripcion}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          {proyecto.tecnologias.map((tech, i) => (
            <span
              key={i}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${
                darkMode
                  ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300"
                  : "bg-cyan-100 border-cyan-300 text-cyan-700"
              }`}
            >
              <svg className="w-4 h-4 fill-current">
                <use xlinkHref={`/portfolio.min.svg#${tech.logo}`} />
              </svg>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


export default Proyectos;
