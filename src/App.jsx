import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };


  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <>
      <header>
        <Navbar handleOpenMenu={handleOpenMenu} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </header>
      <main>
        <Sidebar openMenu={openMenu} handleCloseMenu={handleCloseMenu} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Home />
        <About />
        <Skills isDarkTheme={isDarkTheme}/>
        <Experience />
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
