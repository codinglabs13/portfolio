import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };


  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

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
        <Layout isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
