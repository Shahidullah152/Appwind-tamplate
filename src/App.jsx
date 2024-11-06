import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Article from "./components/Article/Article";
import Award from "./components/Awards/Award";
import Blog1 from "./components/Blogs/Blog1";
import Client from "./components/Client/Client";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";
import Help from "./components/Help/Help";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Plan from "./components/Plan/Plan";
import Question from "./components/Question/Question";
import Work from "./components/Work/Work";
import Blog2 from "./components/Blogs/Blog2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
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
    ),
  },
  {
    path: "/blog1",
    element: (
      <>
        <Navbar />
        <Blog1 />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog2",
    element: (
      <>
        <Navbar />
        <Blog2 />
        <Footer />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
