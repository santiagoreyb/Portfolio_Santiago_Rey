import { useState, useEffect } from "react";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import CursosCertificados from "./components/CursosCertificados";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Reconocimientos from "./components/Reconocimientos";

function App({ defaultLang = "es" }) {
  // 🌙 Modo oscuro por defecto = true, o lo que haya en localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  // 🗣️ Idioma: inicializamos con defaultLang si no hay nada en localStorage
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return saved || defaultLang;
  });

  // 🌙 Modo oscuro: aplicar clase al root y guardar en localStorage
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 🌍 Guardar idioma seleccionado
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="min-h-screen">
      {/* Encabezado */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
      />

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-4">
        <section id="perfil">
          <Perfil darkMode={darkMode} lang={lang} />
        </section>

        <section id="experiencia">
          <Experiencia darkMode={darkMode} lang={lang} />
        </section>

        <section id="educacion">
          <Educacion darkMode={darkMode} lang={lang} />
        </section>

        <section id="cursos-certificados">
          <CursosCertificados darkMode={darkMode} lang={lang} />
        </section>

        <section id="proyectos">
          <Proyectos darkMode={darkMode} lang={lang} />
        </section>

        <section id="reconocimientos">
          <Reconocimientos darkMode={darkMode} lang={lang} />
        </section>

        <section id="habilidades">
          <Habilidades darkMode={darkMode} lang={lang} />
        </section>

        <section id="contacto">
          <Contacto darkMode={darkMode} lang={lang} />
        </section>
      </main>

      {/* Pie de página */}
      <Footer darkMode={darkMode} lang={lang} />
    </div>
  );
}

export default App;
