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
    </>
  );
}

export default App;
