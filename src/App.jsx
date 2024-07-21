import { useState } from "react"
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

  return (
    <>
      <header>
        <Navbar handleOpenMenu={handleOpenMenu} />
      </header>
      <main>
        <Sidebar openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
        <Home />
        <About />
        <Skills />
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
