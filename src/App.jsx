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
import { useState } from "react";
import { getDarkMode, toggleDarkMode } from "./components/Themes/Themes";

function App() {
  // Dark & Ligth Mode Functionality
  const [DarkMode, setDarkMode] = useState(getDarkMode());

  const handleDarkMode = () => {
    const newMode = toggleDarkMode();
    setDarkMode(newMode);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar DarkMode={DarkMode} handleDarkMode={handleDarkMode} />
          <Hero />
          <Award DarkMode={DarkMode} />
          <About DarkMode={DarkMode} />
          <Work DarkMode={DarkMode} />
          <Plan DarkMode={DarkMode} />
          <Client DarkMode={DarkMode} />
          <Question DarkMode={DarkMode} />
          <Article DarkMode={DarkMode} />
          <Company DarkMode={DarkMode} />
          <Help DarkMode={DarkMode} />
          <Footer DarkMode={DarkMode} />
        </>
      ),
    },
    {
      path: "/blog1",
      element: (
        <>
          <Navbar DarkMode={DarkMode} handleDarkMode={handleDarkMode} />
          <Blog1 DarkMode={DarkMode} />
          <Footer DarkMode={DarkMode} />
        </>
      ),
    },
    {
      path: "/blog2",
      element: (
        <>
          <Navbar DarkMode={DarkMode} handleDarkMode={handleDarkMode} />
          <Blog2 DarkMode={DarkMode} />
          <Footer DarkMode={DarkMode} />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
