import { Route, Routes } from "react-router";
import App from "./App";
import DestaquesPge from "./pages/DestaquesPge";
import Medicamentos from "./pages/MedicamentosPge";
import Cosmeticos from "./pages/Cosmeticos";
import Descontos from "./pages/Descontos";
import Vitaminas from "./pages/Vitaminas";
import Ortopedia from "./pages/Ortopedia";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/destaques" element={<DestaquesPge />} />
      <Route path="/medicamentos" element={<Medicamentos />} />
      <Route path="/cosmeticos" element={<Cosmeticos />} />
      <Route path="/descontos" element={<Descontos />} />
      <Route path="/vitaminas" element={<Vitaminas />} />
      <Route path="/ortopedia" element={<Ortopedia />} />
    </Routes>
  )
}