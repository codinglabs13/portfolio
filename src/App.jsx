import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

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
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
