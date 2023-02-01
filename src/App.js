import { Container } from "react-bootstrap";
import Top from "./components/Top";
import MyNav from "./components/MyNav";
import About from "./components/AboutSec";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <MyNav />
      <Top />
      <About />
      <Skills />
      <Projects />
      <footer className="text-center mt-2 mb-2" style={{width: '100vw', bottom: 0 }}>
        Made by Catriona Ferguson | {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
