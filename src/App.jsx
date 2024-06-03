import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ViewDocument from "./pages/ViewDocument.jsx";
import SeusDocumentos from "./pages/SeusDocumentos.jsx";
import Usuario from "./pages/Usuario.jsx";
import Navigation from "./components/Navigation.jsx";
import VerDocumentos from "./pages/VerDocumentos.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/view/:id" element={<ViewDocument />} />
        <Route exact path="/" element={<Index />} />
        <Route path="/seus-documentos" element={<SeusDocumentos />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/ver-documentos" element={<VerDocumentos />} />
      </Routes>
    </Router>
  );
}

export default App;
