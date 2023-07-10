import { useRef } from "react";
import { motion, useScroll, useTransform ,useViewportScroll} from "framer-motion";
import cover from "../../assets/woodie-mockup.png";
import React, { useEffect, useState } from 'react';
import AnimatedCursor from "react-animated-cursor"
import ParallaxText from "./ParallaxText";
import Videobg from '../../assets/woodie-home.mp4'
import right from '../../assets/right-arrow.svg'
import Down from '../../assets/down.png'
import Logo from '../../assets/woodie 2.png'
import wireframe1 from '../../assets/wireframe-landingpage.png'
import wireframe2 from '../../assets/wireframe-info.png'
import wireframe3 from '../../assets/wireframe-admin.png'
import slide from '../../assets/slide.png'
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import QR from '../../assets/QR.svg'











import './casestudies.css'
import '../../fonts/fonts.css'


/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
export const Woodie = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bottomToTop = () => {
    window.scrollTo({
        top: 760,
        behavior: "smooth",
    });
};

const { scrollYProgress } = useViewportScroll();
const options = {
  // ease: [[0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0]]
};

const x = useTransform(scrollYProgress, [0, 0.7, 1], [800, 500, 0], options);
const y = useTransform(scrollYProgress, [5, 0.7, 1], [-200, 0, 200], options);
const opacity = useTransform(
  scrollYProgress,
  [0.2, 0.3, 0.9, 1],
  [0, 1, 1, 0],
  options
);

const containerRef = useRef(null);

const { scrollYProgress: scrollYProgressScroll } = useScroll({
  target: containerRef,
  offset: ["start end", "end end"]
});

const bottomShadowValue = useTransform(
  scrollYProgressScroll,
  [0, 1],
  ["-100%", "0%"]
);
const imageValue = useTransform(scrollYProgressScroll, [0, 1], ["-100%", "0%"]);
const topShadowValue = useTransform(
  scrollYProgressScroll,
  [0, 1],
  ["-25%", "100%"]
);

  

  return (
    <div>
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
        

      <div className="top-section" style={{background:'#ADC1B5',width:'100%',height:'100vh',paddingTop:10}}>
      <div className="case-header" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginLeft:16,marginRight:16}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <img src={right} style={{width:32,height:32,objectFit:'contain'}}/>
            <p style={{margin:0,fontFamily:'Raleway',fontSize:16,color:'#000',fontWeight:500,marginLeft:12}}>Go Back</p>
          </div>
          <img src={Logo} style={{width:55,height:55}}/>
        </div>
        <h1 style={{margin:0,marginTop:32}}>Woodie</h1>
        <p style={{fontFamily:'Raleway',fontSize:20,color:'#fff',fontWeight:500,margin:0,marginTop:20,textAlign:'center'}}>QRoots: Unveiling Nature's Secrets - Exploring SRM University's Biodiversity</p>
        <div className="videobg" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
            <video className='videoTag' autoPlay loop muted style={{width:'24em',objectFit:'contain',borderRadius:4}}>
                <source src={Videobg} type='video/mp4' />
            </video>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
            <img onClick={bottomToTop} src={Down} style={{width:55,height:55}}/>
        </div>
        
        <div class="" style={{marginTop:32}}>
          <ParallaxText baseVelocity={-4}>The Green Haven Chronicle</ParallaxText>
          <ParallaxText baseVelocity={4}>let's dive into the case study</ParallaxText>
          </div>
      </div>
      
    
    <section className="scroll-container" ref={containerRef}>

      <div className="copy">
        <h2>Fully Responsive Web App</h2>
      </div>
      <div className="img-container">
        <motion.div className="img-inner" style={{ translateX: imageValue }}>
          <motion.div
            className="bottom-shadow"
            style={{ translateX: bottomShadowValue }}
          />
          <img src={cover} alt="a green plant" />
          <motion.div
            className="top-shadow"
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
    </section>
    
 <div style={{background:'#656565',height:1,width:'100%',marginTop:50}}/>
    <div className="about-project" style={{marginLeft:20,marginRight:20,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',marginTop:50}}>
      
          <div style={{}}>
            <p className="about-heading" style={{}}> About Woodie</p>
            <p className="about-phrase" style={{}}> Nature's Symphony Unleashed: Exploring the Vibrant Flora of SRM University</p>
          </div>
          <div style={{display:'flex',alignItems:'',justifyContent:'space-between',flexWrap:'wrap',flexDirection:'row',marginTop:32,width:'96%'}}>
              <div className="abt-desbox" style={{}}>
                 <p className="about-des" style={{}}>I still remember the day we got into this project in collaboration with Agricultural department, We got the chance to present the Design Ideas & the Integration Process in a Conference with great people including the Chairman of SRM University, It was a great experience collaborating with Agricultural department. The Idea of this project where the Nature admirers get to know the entire details about the rich greenery across the campus Inspired me to work on this with great Interest As a second Year student I had a excellent experience and it was a great opportunity working on a software for my University that would be a memorable project </p>
              </div>
              <div className="my-info" style={{width:250}}>

                <h2>Role</h2>
                <p >UX & Frontend Dev</p>

                <h2>Client</h2>
                <p >SRM University</p>

                <h2>Date</h2>
                <p >2022 - 2023</p>

              </div>
          </div>

    </div>

    <div style={{background:'#656565',height:1,width:'100%',marginTop:50}}/>


    <div className="brand" style={{marginLeft:20,marginRight:20,marginTop:50}}>
      <div className="about-phrase">
        01
      </div>
      <p className="about-heading"> Building a brand Woodie</p>
      <p className="about-phrase">Woodie: Elevating a University-level Project into an Unforgettable Brand.</p>
      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>The Process</h2>
          </div>
          <div className="my-info" style={{width:500}}>
            <p>Choosing a natural green color palette and sketching the logo that matches the University logo thereby showcasing woodie as a sub brand</p>     
          </div>    
      </div> 

       <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>Typography</h2>
          </div>
          <div className="palette" style={{width:500,display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'column',height:200}}>
            <p style={{fontFamily:'Poppins',fontSize:42,fontWeight:800,margin:0}}>Poppins</p>     
            <p style={{fontFamily:'Poppins',fontSize:42,fontWeight:400,margin:0}}>Poppins</p>     

          </div>    
      </div>   

      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>Color Palette</h2>
          </div>
         
          <div className="palette" style={{width:500,display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'column',height:400}}>
          <motion.div style={{backgroundColor:'#829D94',height:55,width:'100%',borderRadius:6,display:'flex',alignItems:'center'}}
               whileInView={{ backgroundColor: "#829D94", transform: "scale(1)" }} // Scaling to the desired size when in view
               initial={{ backgroundColor: "#000000", transform: "scale(0.8)" }}
               exit={{
                 opacity: 0,
                 backgroundColor: "#dadada",
                 transition: { backgroundColor: { delay: 1 }, opacity: { delay: 0.1 } }
               }}
               transition={{
                 duration: 0.25,
                 delay: 0.5,
                 ease: [0, 0.71, 0.82, 1.01],
                 transform: { duration: 1, ease: "easeInOut" } // Slow transition for scaling effect
               }}>
              <p style={{color:'#ffff',fontSize:18,fontWeight:400,margin:0,fontFamily:'Helvetica',marginLeft:50}}>#829D94</p>
            </motion.div>  

            <motion.div style={{height:55,width:'100%',borderRadius:6,display:'flex',alignItems:'center'}}
               whileInView={{ backgroundColor: "#49796A", transform: "scale(1)" }} // Scaling to the desired size when in view
               initial={{ backgroundColor: "#000000", transform: "scale(0.7)"}}
               exit={{
                 opacity: 0,
                 transition: { backgroundColor: { delay: 1 }, opacity: { delay: 0.1 } }
               }}
               transition={{
                 duration: 0.25,
                 delay: 0.5,
                 ease: [0, 0.71, 0.82, 1.01],
                 transform: { duration: 1, ease: "easeInOut" } // Slow transition for scaling effect
               }}> 
                <p style={{color:'#ffff',fontSize:18,fontWeight:400,margin:0,fontFamily:'Helvetica',marginLeft:50}}>#49796A</p>
              </motion.div> 


            <motion.div style={{backgroundColor:'#FFFFFF',height:55,width:'100%',borderRadius:6,display:'flex',alignItems:'center'}}
            whileInView={{ backgroundColor: "#FFFFFF", transform: "scale(1)" }} // Scaling to the desired size when in view
            initial={{ backgroundColor: "#000000", transform: "scale(0.6)" }}
            exit={{
              opacity: 0,
              backgroundColor: "#dadada",
              transition: { backgroundColor: { delay: 1 }, opacity: { delay: 0.1 } }
            }}
            transition={{
              duration: 0.25,
              delay: 0.5,
              ease: [0, 0.71, 0.82, 1.01],
              transform: { duration: 1, ease: "easeInOut" } // Slow transition for scaling effect
            }}>
              <p style={{color:'#000000',fontSize:18,fontWeight:400,margin:0,fontFamily:'Helvetica',marginLeft:50}}>#FFFFF</p>
            </motion.div> 

            <motion.div style={{height:55,width:'100%',borderRadius:6,display:'flex',alignItems:'center'}}
            whileInView={{ backgroundColor: "#252525", transform: "scale(1)" }} // Scaling to the desired size when in view
            initial={{ backgroundColor: "#000000", transform: "scale(0.5)" }}
            exit={{
              opacity: 0,
              backgroundColor: "#dadada",
              transition: { backgroundColor: { delay: 1 }, opacity: { delay: 0.1 } }
            }}
            transition={{
              duration: 0.25,
              delay: 0.5,
              ease: [0, 0.71, 0.82, 1.01],
              transform: { duration: 1, ease: "easeInOut" } // Slow transition for scaling effect
            }}>
              <p style={{color:'#ffff',fontSize:18,fontWeight:400,margin:0,fontFamily:'Helvetica',marginLeft:50}}>#252525</p>
            </motion.div>     
          </div>
          
      </div>  


    </div>

    <div className="div1">
    <div style={{background:'#656565',height:1,width:'100%',marginTop:50}}/>

    <div className="wireframe-section" style={{marginLeft:20,marginRight:20,marginTop:50}}>
    <div className="about-phrase">
        02
      </div>
      <p className="about-heading"> Wireframing</p>
      <p className="about-phrase">Schematic Simplicity: Illuminating Woodie's Wireframe Foundations</p>

      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>User Flow Optimization</h2>
          </div>
          <div className="my-info" style={{width:500}}>
            <p>We began by mapping out the ideal user flow, envisioning a streamlined process that allows users to effortlessly scan the QR codes and access tree information. Each step was carefully analyzed to eliminate any potential friction points, ensuring a seamless experience from start to finish.</p>     
          </div>    
      </div> 

      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>Initial sketches</h2>
          </div>
          <div className="casestudy-img" style={{}}>
            <img src={wireframe1} style={{}} />
            <img src={wireframe3} style={{}} />
            <img src={wireframe2} style={{}} />
          </div>    
      </div> 
      </div> 
      </div>

      <div style={{ height: "4000px" }}>
        
        <div className="design-process" style={{}}>
          
      <div className="about-phrase">
        
        03
      </div>
      <p className="about-heading"> Design Process</p>
      <p className="about-phrase">Schematic Simplicity: Illuminating Woodie's Wireframe Foundations</p>
      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>User Flow Optimization</h2>
          </div>
          <div className="my-info" style={{width:500}}>
            <p>We began by mapping out the ideal user flow, envisioning a streamlined process that allows users to effortlessly scan the QR codes and access tree information. Each step was carefully analyzed to eliminate any potential friction points, ensuring a seamless experience from start to finish.</p>     
          </div>    
      </div> 
      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>Ideation and Conceptualization</h2>
          </div>
          <div className="my-info" style={{width:500}}>
            <p>Collaborated with the Agricultural department, to brainstorm and define key features and functionalities. Explored design concepts that reflect the nature-centric theme while ensuring a modern and intuitive user interface.</p>     
          </div>    
      </div> 
      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>User Experience Design</h2>
          </div>
          <div className="my-info" style={{width:500}}>
            <p>Developed user personas and user journey maps to guide the design process and ensure a user-centered approach. Conducted usability testing sessions to validate the UX design and iterate on areas of improvement.</p>     
          </div>    
      </div> 

      <div className="brand-text" style={{marginTop:50}}>
          <div className="my-info">
            <h2>User Interface Design</h2>
          </div>
          <div className="my-info" style={{width:500}}>
            <p>Crafted a visually appealing UI that reflects Woodie's brand identity, incorporating nature-inspired color palettes, organic shapes, and intuitive navigation elements.</p>     
          </div>    
      </div> 


      </div>
      <div className="videobg" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
              <video className='video-filler1' autoPlay loop muted style={{pointerEvents: 'none' }}>
                  <source src={Videobg} type='video/mp4' />
              </video>
            </div>

        <div className="div2">
          
          <div className="container-case">
            
            <div className="left">

           
              
              <h1>
                {/* Learning about the floral diversity within the campus made simple */}
                Info is one Scan away
              </h1>
              
              <h3>
                QR is generated through the admin panel for each URL of the Trees & plants datas fed into the server later Installation of the QR code nearby the respective flora is done 
              </h3>
            </div>
            <div className="right">
              <motion.div
                // style={{
                //   scale: x,
                // }}
                style={{
                  x,
                  y,
                  opacity
                }}
              >
                <img
                  className="arrow"
                  alt="ra"
                  src={slide2} style={{}}/>
                  
              </motion.div>
              <div className="QRicon"  >
                {/* <img src={QR} style={{width:60,height:60}}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div3">
      <p className="about-phrase" style={{paddingRight:20,paddingLeft:20}}>Thank you </p>



        </div>
         
    

    </div>  
  );
};
