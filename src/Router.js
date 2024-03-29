import { Route, Routes } from "react-router";
import App from "./App";
import { Carrinho } from "./pages/Carrinho/index";
import { Produto } from "./pages/Produtos/Produtos";
import { Categoria } from "./pages/Categorias/Categoria";  

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/destaques" element={<Categoria />} />
      <Route path="/medicamentos" element={<Categoria />} />
      <Route path="/cosmeticos" element={<Categoria />} />
      <Route path="/vitaminas" element={<Categoria />} />
      <Route path="/ortopedia" element={<Categoria />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
  )
}