import React, {useEffect} from 'react'
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";

const Layout = ({isDarkTheme}) => {
    
    useEffect(() => {
      document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    }, [isDarkTheme]);
  
   
    return (
        <>
                <Home />
                <About />
                <Skills isDarkTheme={isDarkTheme} />
                <Experience />
                <Project />
            
        </>
    )
}

export default Layout