import React from 'react'
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor"
import './Nav.scss'
import '../responsive.css'
import './styles.css'
import '../fonts/fonts.css'

import Allan from '../assets/Allan.png'
import Arrow from '../assets/arrow.png'
import Github from '../assets/github.svg'
import Dribble from '../assets/dribble.svg'
import Linkedin from '../assets/linkedin.svg'
import Instagram from '../assets/instagram.svg'
import Cover from '../assets/cover.jpg'
import ParallaxText from "./ParallaxText.tsx";





const Herosection = () => {

  const handleButtonClick1 = () => {
    window.location.href = 'https://www.linkedin.com/in/allan-jerrold-509b31246/'; 
  };
  const handleButtonClick2 = () => {
    window.location.href = 'https://github.com/Allanjerrold22'; 
  };

  const handleButtonClick3 = () => {
    window.location.href = 'https://dribbble.com/AllanJerrold'; 
  };
  
  return (

    <div style={{}}>  
        <AnimatedCursor
          innerSize={6}
          outerSize={38}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
          outerStyle={{
            border: '2px solid var(--cursor-color)'
          }}
        />
         <div  style={{ width: "100%",
              // backgroundImage:  `url(${Cover})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              alignItems:'center',
              

              }} >

        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',width:'100%',paddingTop:60}}>
              <button onClick={handleButtonClick1} className='social' style={{margin:0,fontSize:16,fontWeight:400,background:'transparent',color:'#808080',borderWidth:0,display:'flex',alignItems:'center',marginTop:10}}> <img src={Linkedin} style={{width:24,height:24,marginRight:6}}/>LinkedIn</button>
              <button onClick={handleButtonClick2} className='social' style={{margin:0,fontSize:16,fontWeight:400,background:'transparent',color:'#808080',borderWidth:0,display:'flex',alignItems:'center',marginTop:10}}> <img src={Github} style={{width:24,height:24,marginRight:6}}/>GitHub</button>
              <button onClick={handleButtonClick3} className='social' style={{margin:0,fontSize:16,fontWeight:400,background:'transparent',color:'#808080',borderWidth:0,display:'flex',alignItems:'center',marginTop:10}}> <img src={Dribble} style={{width:24,height:24,marginRight:6}}/>Dribble</button>
              {/* <button className='social' style={{margin:0,fontSize:16,fontWeight:400,background:'transparent',color:'#808080',borderWidth:0,display:'flex',alignItems:'center',width:160,marginTop:10}}> <img src={Instagram} style={{width:24,height:24,marginRight:6}}/>Instagram</button> */}

          </div>

          <div className="hero-container" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img src={Allan} style={{width:'7em',height:'7em',marginTop:32}}/>
            <p  style={{margin:0,fontWeight:600,color:'#656565',textAlign:'center',marginTop:32}}class="hero glitch layers" data-text="Allan Jerrold"><span>Allan Jerrold</span></p>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                <p class="hero-text" style={{ fontFamily: 'Raleway, sans-serif',margin:0,fontWeight:900,color:'#ffff',textAlign:'center',marginTop:16}}>Crafting<br/>Digital Excellence <br/>Together</p> 
                <p class="hero-subtext"style={{margin:0,fontWeight:400,color:'#656565',textAlign:'center',marginTop:32,paddingRight:18,paddingLeft:18}}>Transforming ideas into extraordinary <br/>digital experiences through captivating UI designs and flawless user experiences.</p> 
           </motion.div>
              <button style={{width:140,height:50,background:'#BC3E6F',color:'white',borderWidth:0,borderRadius:12,display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:32,fontFamily:'Raleway',fontSize:16,fontWeight:500}}>
                Let's talk 
                <img src={Arrow} style={{width:14,height:14}}/>
              </button>
          </div>
          </div>
          <div class="animated-text" style={{marginTop:50}}>
          <ParallaxText baseVelocity={-2}>Designing the Future Today</ParallaxText>
          <ParallaxText baseVelocity={2}>Designing the Future Today</ParallaxText>
          </div>
          {/* <ParallaxText></ParallaxText> */}

    
      
      
    </div>
  )
}

export default Herosection;
