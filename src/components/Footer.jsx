import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

// 📄 Importa ambos CV según el idioma
import cvES from "../assets/CV/Hoja de Vida - Santiago Camilo Rey Benavides.pdf";
import cvEN from "../assets/CV/Resume - Santiago Camilo Rey Benavides.pdf";

function Footer({ darkMode, lang }) {
  // 🌍 Selecciona el CV correcto
  const cv = lang === "en" ? cvEN : cvES;

  // 📜 Textos dinámicos según idioma
  const text = {
    es: {
      rights: "Todos los derechos reservados.",
      titleCV: "Ver CV",
    },
    en: {
      rights: "All rights reserved.",
      titleCV: "View Resume",
    },
  };

  return (
    <footer
      className={`w-full py-8 mt-16 border-t backdrop-blur-md transition-colors duration-500 ${
        darkMode
          ? "bg-[#0b1c2c]/80 border-cyan-500/30 text-cyan-100"
          : "bg-[#d3daeb]/70 border-[#93B4D4] text-gray-800"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-[90%] max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        {/* Texto o nombre */}
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Santiago Rey —{" "}
          {lang === "en" ? text.en.rights : text.es.rights}
        </p>

        {/* Iconos sociales */}
        <div className="flex items-center justify-center gap-6 text-2xl">
          {/* GitHub */}
          <a
            href="https://github.com/santiagoreyb"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${
              darkMode ? "hover:text-cyan-400" : "hover:text-[#3b6ea5]"
            }`}
            title="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/santiagoreyb/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${
              darkMode ? "hover:text-cyan-400" : "hover:text-[#3b6ea5]"
            }`}
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* CV */}
          <a
            href={cv}
            download={lang === "en" ? "Resume - Santiago Rey.pdf" : "Hoja de Vida - Santiago Rey.pdf"}
            className={`transition-transform hover:scale-110 ${
              darkMode ? "hover:text-cyan-400" : "hover:text-[#3b6ea5]"
            }`}
            title={lang === "en" ? text.en.titleCV : text.es.titleCV}
          >
            <FaFileAlt />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
