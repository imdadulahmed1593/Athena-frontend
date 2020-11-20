import "./App.css";
import Achievements from "./Components/Achievements/Achievements";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner2/Banner2";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Banner></Banner>
      <Services></Services>
      <Banner2></Banner2>
      <Achievements></Achievements>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
