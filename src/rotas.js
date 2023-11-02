import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FormularioCadastro from "./pages/formulario-cadastro";
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/formulario" element={<FormularioCadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
