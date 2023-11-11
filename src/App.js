import "./App.css";
import "./components/Contact/Contact.css";
import "./components/Footer/Footer.css";
import "./components/Hero/Hero.css";
import "./components/Navbar/Navbar.css";
import "./components/About/About.css";
import "./components/Services/Services.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Client from "./components/ClientList/Client";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Hero />
      {/* <Navbar /> */}
      <About />
      <Services />
      {/* <Client /> */}
      {/* <Team /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
