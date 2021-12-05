import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faCheckSquare);

function App() {
  return (
    <div className="App-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
