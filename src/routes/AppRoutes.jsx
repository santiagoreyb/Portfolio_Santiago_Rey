import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Redirigir la raíz a español */}
        <Route path="/" element={<Navigate to="/es" />} />

        {/* Rutas por idioma */}
        <Route path="/es" element={<App defaultLang="es" />} />
        <Route path="/en" element={<App defaultLang="en" />} />

        {/* Ruta comodín */}
        <Route path="*" element={<Navigate to="/es" />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
