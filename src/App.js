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
    </>
  );
}

export default App;
