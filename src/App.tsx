import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/ui/sidebar";
import Login from "./modules/login/screens/login";
import Home from "./modules/home/screens/home";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Renderiza a sidebar apenas se não estiver na rota /login */}
      {location.pathname !== "/login" && <Sidebar />}

      {/* Conteúdo principal */}
      <div className="flex-1">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </div>
  );
}

export default App;