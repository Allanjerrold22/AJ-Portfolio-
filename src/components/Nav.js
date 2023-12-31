import React, {useState} from 'react';
import './Nav.scss'
import {motion, AnimatePresence} from "framer-motion";
import Menu from '../assets/menu.png'

function Nav() {

  const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }

  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }

  return (
    <div>
      <div className='nav-container' style={{marginTop:12}}>
          
      <p style={{fontSize:14,fontWeight:400,color:'#EEEE',marginLeft:0}}>Portfolio/2023</p>

          <p style={{fontSize:18,fontWeight:800,color:'#ffff',marginLeft:0}}>Allan Jerrold</p>
          
        <div className="menu" onClick={isOpen}>
          <div className="fa fa-bars">
            <img src={Menu} style={{width:65,height:65}}/>
          </div>
        </div>      
      </div>
      <AnimatePresence>
        {
          open &&(
            <motion.div className="menu_container"
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
            >
              <div className="btn_close" onClick={closeMenu}>
              <img src={Menu} style={{width:65,height:65}}/>
              </div>
              
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.8}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:1
                    }
                 }}
              >Home</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.8
                    }
                 }}
              >About</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.6}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.6
                    }
                 }}
              >Portfolio</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                 }}
              >Blog</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.4}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.2
                    }
                 }}
              >Contact</motion.a>
            </motion.div>
          )
        }    
      </AnimatePresence>  
     
    </div>
  );
}

export default Nav;