import Info from "./components/Info";
import AboutInterestsWrapper from "./components/AboutInterestsWrapper";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faCheckSquare);

function App() {
  return (
    <div className="App-container">
      <Info />
      <AboutInterestsWrapper />
      <Footer />
    </div>
  );
}

export default App;
