import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";

function RootRouter() {
  return (
    <Router>
      <Routes>
        {/* Redirige la raíz al español por defecto */}
        <Route path="/" element={<Navigate to="/es" />} />

        {/* Rutas por idioma */}
        <Route path="/es/*" element={<App defaultLang="es" />} />
        <Route path="/en/*" element={<App defaultLang="en" />} />
      </Routes>
    </Router>
  );
}

export default RootRouter;
