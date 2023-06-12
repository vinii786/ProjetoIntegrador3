import { Route, Routes } from "react-router";
import App from "./App";
import Descontos from "./pages/Descontos";
import { Carrinho } from "./pages/Carrinho";
import { Produto } from "./pages/Produto";
import { Categoria } from "./pages/Categoria";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/destaques" element={<Categoria />} />
      <Route path="/medicamentos" element={<Categoria />} />
      <Route path="/cosmeticos" element={<Categoria />} />
      <Route path="/descontos" element={<Descontos />} />
      <Route path="/vitaminas" element={<Categoria />} />
      <Route path="/ortopedia" element={<Categoria />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
  )
}