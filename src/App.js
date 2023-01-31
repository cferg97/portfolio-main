import { Container } from "react-bootstrap";
import Top from "./components/Top";
import MyNav from "./components/MyNav";
import About from "./components/AboutSec";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <MyNav />
      <Top />
      <About />
      <Skills />
    </>
  );
}

export default App;
