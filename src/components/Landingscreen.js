
// import './App.css';
import Nav from './Nav';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import React from 'react';
import ToggleDark from '../components/toggleDark';
import Herosection from '../components/Herosection';
import AnimatedCursor from "react-animated-cursor"
import About from '../components/About';
import Experiences from './Experiences';

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

 const Landingscreen=()=>{
  const [darkMode, setDarkMode] = React.useState(true);
    return(
        <div>
          
          {/* <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer> */}
      
        {/* <Nav/> */}
        <Herosection/>
        <About/>
        
        <div style={{marginTop:0}}>
        <Experiences/>
        </div>
        
        
        
        
        
        </div>
    )
 }
 export default Landingscreen;