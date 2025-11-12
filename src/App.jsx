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
  // 🌙 Modo oscuro siempre por defecto
  const [darkMode, setDarkMode] = useState(true);

  // 🗣️ Idioma: inicializamos con defaultLang si no hay nada en localStorage
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang || defaultLang;
  });

  // 🌙 Aplicar clase de tema al root y body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.add("dark");
    root.classList.remove("light");
    body.classList.add("dark");
    body.classList.remove("light");

    localStorage.setItem("theme", "dark"); // opcional, actualiza localStorage
  }, []);

  // 🌍 Guardar idioma seleccionado
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />

      <main className="max-w-6xl mx-auto px-4">
        <section id="perfil"><Perfil darkMode={darkMode} lang={lang} /></section>
        <section id="experiencia"><Experiencia darkMode={darkMode} lang={lang} /></section>
        <section id="educacion"><Educacion darkMode={darkMode} lang={lang} /></section>
        <section id="cursos-certificados"><CursosCertificados darkMode={darkMode} lang={lang} /></section>
        <section id="proyectos"><Proyectos darkMode={darkMode} lang={lang} /></section>
        <section id="reconocimientos"><Reconocimientos darkMode={darkMode} lang={lang} /></section>
        <section id="habilidades"><Habilidades darkMode={darkMode} lang={lang} /></section>
        <section id="contacto"><Contacto darkMode={darkMode} lang={lang} /></section>
      </main>

      <Footer darkMode={darkMode} lang={lang} />
    </div>
  );
}

export default App;
