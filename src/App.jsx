import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./layout/Login";
import FormularioLogin from "./pages/FormularioLogin";
import Dashboard from "./layout/Dashboard";
import FundamentoUseState from "./pages/FundamentoUseState";
import FundamentoUseEffect from "./pages/FundamentoUseEffect";
function App() {
  return (
    <BrowserRouter>
    {/* Agrupador de rutas */}
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin />} />
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentoUseState />} />
          <Route path="useffect" element={<FundamentoUseEffect />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}
export default App