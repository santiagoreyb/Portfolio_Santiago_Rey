import perfil from "../assets/profile.png";

function Perfil({ darkMode }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center
                 w-[90%] max-w-6xl mx-auto min-h-screen 
                 px-2 py-6 pt-24 transition-colors duration-500"
    >
      {/* 📸 Imagen primero en móvil */}
      <div className="order-1 md:order-2 flex flex-col items-center space-y-2">
        <img
          src={perfil}
          alt="profile"
          className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto rounded-2xl object-cover shadow-lg"
        />

        {/* 🔗 Rectángulos de redes */}
        <div className="w-full flex flex-col gap-3 items-center">
          {[
            { id: "icon-linkedin", text: "LinkedIn", link: "https://www.linkedin.com/in/santiagoreyb/" },
            { id: "icon-gmail-new", text: "Correo", link: "#contacto" },
            { id: "icon-github", text: "GitHub", link: "https://github.com/santiagoreyb" },
          ].map((item) => (
            <a
              key={item.text}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-[80%] sm:w-[70%] md:w-[85%]
                         bg-[#7EC8E3] text-[#2C3E50] font-bold py-2 rounded-xl 
                         shadow-md hover:scale-105 transition-transform duration-200"
            >
              <svg className="w-6 h-6" aria-hidden="true">
                <use href={`/portfolio.min.svg#${item.id}`} />
              </svg>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* 📝 Texto */}
      <div className="order-2 md:order-1 text-center md:text-left space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight ">
          👋 <span className="
                    bg-gradient-to-r from-[#2C3E50] to-[#C4D7E9] 
                    bg-clip-text text-transparent"></span>¡Hey! <br />
                    Soy Santiago
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-relaxed font-medium">
          <span className={darkMode ? "text-[#F8FAFC]" : "text-[#000000]"}>
            Ingeniero de Sistemas
          </span>{" "}
          con experiencia en{" "}
          <span className={darkMode ? "text-[#7EC8E3]" : "text-[#078AB9]"}>desarrollo de software full-stack</span>, hábil en el
          diseño y construcción de{" "}
          <span className={darkMode ? "text-[#F5D88C]" : "text-[#B28100]"}>
            aplicaciones móviles, web y videojuegos
          </span>
          , con dominio de tecnologías modernas y enfoque en buenas prácticas
          de desarrollo. Apasionado por crear soluciones{" "}
          <span className={darkMode ? "text-[#F8FAFC]" : "text-[#000000]"}>
            centradas en el usuario
          </span>
          ,{" "}
          <span className={darkMode ? "text-[#7EC8E3]" : "text-[#078AB9]"}>accesibles</span> y{" "}
          <span className={darkMode ? "text-[#F5D88C]" : "text-[#B28100]"}>
            sostenibles
          </span>.
        </p>
      </div>
    </div>
  );
}

export default Perfil;
