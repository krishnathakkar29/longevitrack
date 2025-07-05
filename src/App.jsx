import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Layout from "./components/layout/layout";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Pricing from "./pages/pricing";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
