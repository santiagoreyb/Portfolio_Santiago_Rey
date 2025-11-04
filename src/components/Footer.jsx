import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import cv from "../assets/Hoja de Vida - Santiago Camilo Rey Benavides.pdf";
function Footer({ darkMode }) {
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
          © {new Date().getFullYear()} Santiago Rey — Todos los derechos reservados.
        </p>

        {/* Iconos sociales */}
        <div className="flex items-center justify-center gap-6 text-2xl">
          {/* GitHub */}
          <a
            href="https://github.com/tuUsuario"
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
            href="https://www.linkedin.com/in/tuPerfil/"
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
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${
              darkMode ? "hover:text-cyan-400" : "hover:text-[#3b6ea5]"
            }`}
            title="Ver CV"
          >
            <FaFileAlt />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
