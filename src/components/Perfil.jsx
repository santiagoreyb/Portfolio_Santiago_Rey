import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import perfil from "../assets/pictures/profile.png";
import cvEs from "../assets/CV/Hoja de Vida - Santiago Camilo Rey Benavides.pdf";
import cvEn from "../assets/CV/Resume - Santiago Camilo Rey Benavides.pdf";

function Perfil({ darkMode, lang }) {
  const texts = {
    es: {
      greeting: "¡Hey!",
      name: "Soy Santiago",
      role: "Ingeniero de Sistemas",
      description: (
        <>
          con experiencia en{" "}
          <span className={darkMode ? "text-[#7EC8E3]" : "text-[#078AB9]"}>
            desarrollo de software full-stack
          </span>
          , hábil en el diseño y construcción de{" "}
          <span className={darkMode ? "text-[#F5D88C]" : "text-[#B28100]"}>
            aplicaciones móviles, web y videojuegos
          </span>
          , con dominio de tecnologías modernas y enfoque en buenas prácticas de
          desarrollo. Apasionado por crear soluciones{" "}
          <span className={darkMode ? "text-[#F8FAFC]" : "text-[#000000]"}>
            centradas en el usuario
          </span>
          ,{" "}
          <span className={darkMode ? "text-[#7EC8E3]" : "text-[#078AB9]"}>
            accesibles
          </span>{" "}
          y{" "}
          <span className={darkMode ? "text-[#F5D88C]" : "text-[#B28100]"}>
            sostenibles
          </span>
          .
        </>
      ),
      viewCV: "Ver CV",
    },
    en: {
      greeting: "Hey!",
      name: "I'm Santiago",
      role: "Systems Engineer",
      description: (
        <>
          with experience in{" "}
          <span className={darkMode ? "text-[#7EC8E3]" : "text-[#078AB9]"}>
            full-stack software development
          </span>
          , skilled in designing and building{" "}
          <span className={darkMode ? "text-[#F5D88C]" : "text-[#B28100]"}>
            mobile, web, and game applications
          </span>
          , with strong command of modern technologies and focus on good
          development practices. Passionate about creating{" "}
          <span className={darkMode ? "text-[#F8FAFC]" : "text-[#000000]"}>
            user-centered
          </span>
          ,{" "}
          <span className={darkMode ? "text-[#7EC8E3]" : "text-[#078AB9]"}>
            accessible
          </span>{" "}
          and{" "}
          <span className={darkMode ? "text-[#F5D88C]" : "text-[#B28100]"}>
            sustainable
          </span>{" "}
          solutions.
        </>
      ),
      viewCV: "View CV",
    },
  };

  const current = texts[lang];
  const cv = lang === "es" ? cvEs : cvEn;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center
                 w-[90%] max-w-6xl mx-auto min-h-screen 
                 px-2 py-6 pt-24 transition-colors duration-500"
    >
      {/* 📸 Imagen */}
      <div className="order-1 md:order-2 flex flex-col items-center space-y-2">
        <img
          src={perfil}
          alt="profile"
          className="w-40 sm:w-52 md:w-64 lg:w-52 xl:w-80 h-auto rounded-2xl object-cover shadow-lg"
        />

        {/* 🔗 Redes */}
        <div className="w-full flex flex-col gap-3 items-center mt-4">
          <a
            href="https://www.linkedin.com/in/santiagoreyb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-[85%] sm:w-[70%] md:w-[85%]
                       bg-[#7EC8E3] text-[#2C3E50] font-bold py-2 rounded-xl 
                       shadow-md hover:scale-105 transition-transform duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/santiagoreyb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-[85%] sm:w-[70%] md:w-[85%]
                       bg-[#7EC8E3] text-[#2C3E50] font-bold py-2 rounded-xl 
                       shadow-md hover:scale-105 transition-transform duration-200"
          >
            <FaGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>

          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-[85%] sm:w-[70%] md:w-[85%]
                      bg-[#7EC8E3] text-[#2C3E50] font-bold py-2 rounded-xl 
                      shadow-md hover:scale-105 transition-transform duration-200"
          >
            <FaFileAlt className="w-6 h-6" />
            <span>{current.viewCV}</span>
          </a>
        </div>
      </div>

      {/* 📝 Texto */}
      <div className="order-2 md:order-1 text-center md:text-left space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
          👋{" "}
          <span
            className="bg-gradient-to-r from-[#2C3E50] to-[#C4D7E9] 
                      bg-clip-text text-transparent"
          >
            {current.greeting}
          </span>{" "}
          <br />
          {current.name}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-relaxed font-medium">
          <span className={darkMode ? "text-[#F8FAFC]" : "text-[#000000]"}>
            {current.role}
          </span>{" "}
          {current.description}
        </p>
      </div>
    </div>
  );
}

export default Perfil;
