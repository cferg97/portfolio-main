import { Container } from "react-bootstrap";

import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
      <footer
        className="text-center mt-2 mb-2"
        style={{ width: "100vw", position: "absolute", bottom: 0 }}
      >
        Made by Catriona Ferguson | {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
