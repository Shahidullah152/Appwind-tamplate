import "./App.css";
import About from "./components/About/About";
import Article from "./components/Article/Article";
import Award from "./components/Awards/Award";
import Client from "./components/Client/Client";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";
import Help from "./components/Help/Help";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Plan from "./components/Plan/Plan";
import Question from "./components/Question/Question";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Award />
      <About />
      <Work />
      <Plan />
      <Client />
      <Question />
      <Article />
      <Company />
      <Help />
      <Footer />
    </>
  );
}

export default App;
