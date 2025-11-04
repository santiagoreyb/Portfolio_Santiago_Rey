import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import javeriana from "../assets/javeriana.png";
import colpensiones from "../assets/colpensiones.png";

function Proyectos({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const proyectos = [
    {
      titulo: "React Dashboard",
      descripcion:
        "Panel interactivo con estadísticas dinámicas, gráficos y autenticación.",
      fecha: "2024",
      imagenes: [colpensiones, javeriana, javeriana],
      tecnologias: ["React", "Chart.js", "Firebase"],
      logos: ["icon-react", "icon-chart", "icon-firebase"],
      repo: "https://github.com/usuario/react-dashboard",
      demo: "https://usuario.github.io/react-dashboard",
    },
    {
      titulo: "Landing Page Interactiva",
      descripcion:
        "Sitio web animado con scroll dinámico y diseño responsivo moderno.",
      fecha: "2023",
      imagenes: [javeriana, javeriana],
      tecnologias: ["HTML", "CSS", "JavaScript"],
      logos: ["icon-html", "icon-css", "icon-javascript"],
      repo: "https://github.com/usuario/landing-page",
      demo: "https://usuario.github.io/landing-page",
    },
    {
      titulo: "API REST Node.js",
      descripcion:
        "Backend para gestión de usuarios, autenticación JWT y conexión a MongoDB.",
      fecha: "2024",
      imagenes: [javeriana, javeriana],
      tecnologias: ["Node.js", "Express", "MongoDB"],
      logos: ["icon-nodejs", "icon-express", "icon-mongodb"],
      repo: "https://github.com/usuario/api-node",
    },
  ];

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-10 transition-all duration-300 ${
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

        {/* Flechas */}
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

        {/* Indicadores */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {proyecto.imagenes.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index
                  ? "bg-cyan-400"
                  : darkMode
                  ? "bg-gray-500/50"
                  : "bg-gray-400/70"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Info proyecto */}
      <div className="p-5 flex flex-col">
        <div className="flex items-center justify-between mb-3">
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
                className={`px-3 py-1 text-xs rounded-md border transition-all duration-300 ${
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
                className={`px-3 py-1 text-xs rounded-md border transition-all duration-300 ${
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

        <p
          className={`text-sm mb-3 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {proyecto.descripcion}
        </p>

        {proyecto.tecnologias && (
          <div className="flex flex-wrap gap-2 mt-2">
            {proyecto.tecnologias.map((tech, i) => (
              <span
                key={i}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                  darkMode
                    ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                    : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                }`}
              >
                <svg className="w-5 h-5" aria-hidden="true">
                  <use href={`/portfolio.min.svg#${proyecto.logos[i]}`} />
                </svg>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Proyectos;
