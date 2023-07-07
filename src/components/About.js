import React from 'react'
import '../fonts/fonts.css'
import './styles.css'
import '../responsive.css'
import Arrow from '../assets/arrow.png'
import Ui from '../assets/pencil.png'
import Mobile from '../assets/mobile.png'
import Desktop from '../assets/desktop.png'
import Thunder from '../assets/thunder.png'



const About = () => {

  const handleButtonClick1 = () => {
    window.location.href = 'https://www.srmist.edu.in/'; 
  };
  const handleButtonClick2 = () => {
    window.location.href = 'https://zionschoolmadambakkam.com/'; 
  };
  
  return (
    <div style={{height:500,marginTop:50}}>
        <div style={{height:1,width:'80%',backgroundColor:'#656565'}}>
        </div>
        <div style={{marginTop:12,marginLeft:20,marginRight:20}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
            <p style={{fontSize:18,color:'#808080',fontFamily:'Raleway',fontWeight:400}}>About</p>
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <button className='text-btn'>Education</button>
              <p style={{color:'#808080',paddingRight:6,paddingLeft:6}}>/</p>
              <button className='text-btn'>What I do</button>
            </div>
            </div>
            <p className="about-bold" style={{margin:0,fontFamily:'Raleway',fontWeight:800,color:'#656565',textAlign:'center',marginTop:55,textDecoration:'underline'}}>Education</p>

            <div className="about-text-container" style={{width:'80%',height:400,display:'flex',justifyContent:'space-evenly',flexDirection:'column',marginLeft:'1em',marginTop:60}}>

              <div className="about-content" style={{}}>
      
              <p className="about-text1" style={{margin:0,fontFamily:'Raleway',fontWeight:400,color:'#808080',textAlign:'left'}}>Bachelors</p>
              <p className="about-bold" style={{margin:0,fontFamily:'Raleway',fontWeight:600,color:'#ffff',textAlign:'left',marginTop:12}}>SRM Institute of Science and Technology</p>
              <p className="about-text1"  style={{margin:0,fontFamily:'Raleway',fontWeight:400,color:'#808080',textAlign:'left',marginTop:12}}>2020 - 2024</p>
              <p className="about-text2"  style={{margin:0,fontFamily:'Raleway',fontWeight:500,color:'#ffff',textAlign:'left',marginTop:16}}>B.Tech CSE</p>
              <button onClick={handleButtonClick1} style={{width:120,height:38,background:'transparent',borderWidth:0,color:'#ffff',fontWeight:200,fontFamily:'Raleway',textAlign:'left',fontSize:16}}>
              Go to Website <img src={Arrow} style={{width:12,height:12}}/>
              </button>

              </div>

              <div className="about-content" style={{}}>

              <p className="about-text1" style={{margin:0,fontFamily:'Raleway',fontWeight:400,color:'#808080',textAlign:'left',marginTop:24}}>Schooling</p>
              <p className="about-bold" style={{margin:0,fontFamily:'Raleway',fontWeight:600,color:'#ffff',textAlign:'left',marginTop:12}}>Zion Matric. Hr. Sec. School</p>
              <p className="about-text1"  style={{margin:0,fontFamily:'Raleway',fontWeight:400,color:'#808080',textAlign:'left',marginTop:12}}>2018 - 2020</p>
              <p className="about-text2"  style={{margin:0,fontFamily:'Raleway',fontWeight:500,color:'#ffff',textAlign:'left',marginTop:16}}>High School</p>
              <button onClick={handleButtonClick2} style={{width:120,height:38,background:'transparent',borderWidth:0,color:'#ffff',fontWeight:200,fontFamily:'Raleway',textAlign:'left',fontSize:16}}>
              Go to Website <img src={Arrow} style={{width:12,height:12}}/>
              </button>

              </div>
            </div>
            <p className="about-bold" style={{margin:0,fontFamily:'Raleway',fontWeight:800,color:'#656565',textAlign:'center',marginTop:55,textDecoration:'underline'}}>What I do</p>

            <div className='card-container' style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap',marginTop:32}}>

         
            <div className="about-card" style={{}}>
              <div style={{height:300,width:260,backgroundColor:'#1A1A1A',borderRadius:20,marginTop:20}}>
              <img src={Ui} style={{width:55,height:55,position:'relative',top:40,left:160}}/>
                <div style={{marginLeft:16,marginTop:100}}>
                  <p style={{fontFamily:'Raleway',fontSize:20,fontWeight:500,margin:0,textAlign:'left',color:'#ffff',marginTop:12}}>User Interface</p>
                  <p style={{fontFamily:'Raleway',fontSize:16,fontWeight:400,margin:0,textAlign:'left',color:'#808080',marginTop:12}}>Crafting intuitive and delightful user experiences that drive engagement and satisfaction.</p>
                </div>
              </div>
            </div>

            <div className="about-card" style={{}}>
              <div style={{height:300,width:260,backgroundColor:'#1A1A1A',borderRadius:20,marginTop:20}}>
              <img src={Mobile} style={{width:55,height:55,position:'relative',top:40,left:160}}/>
                <div style={{marginLeft:16,marginTop:100}}>
                  <p style={{fontFamily:'Raleway',fontSize:20,fontWeight:500,margin:0,textAlign:'left',color:'#ffff',marginTop:12}}>Web & Mobile App</p>
                  <p style={{fontFamily:'Raleway',fontSize:16,fontWeight:400,margin:0,textAlign:'left',color:'#808080',marginTop:12}}>Building responsive web and mobile applications that enhance your online presence and deliver seamless experiences.</p>
                </div>
              </div>
            </div>

            <div className="about-card" style={{}}>
              <div style={{height:300,width:260,backgroundColor:'#1A1A1A',borderRadius:20,marginTop:20}}>
              <img src={Desktop} style={{width:55,height:55,position:'relative',top:40,left:160}}/>
                <div style={{marginLeft:16,marginTop:100}}>
                  <p style={{fontFamily:'Raleway',fontSize:20,fontWeight:500,margin:0,textAlign:'left',color:'#ffff',marginTop:12}}>Design & Creative</p>
                  <p style={{fontFamily:'Raleway',fontSize:16,fontWeight:400,margin:0,textAlign:'left',color:'#808080',marginTop:12}}>Bringing ideas to life through visually captivating designs that make a lasting impact and spark creativity.</p>
                </div>
              </div>
            </div>

            <div className="about-card" style={{}}>
              <div style={{height:300,width:260,backgroundColor:'#1A1A1A',borderRadius:20,marginTop:20}}>
              <img src={Thunder} style={{width:55,height:55,position:'relative',top:40,left:160}}/>
                <div style={{marginLeft:16,marginTop:100}}>
                  <p style={{fontFamily:'Raleway',fontSize:20,fontWeight:500,margin:0,textAlign:'left',color:'#ffff',marginTop:12}}>Development</p>
                  <p style={{fontFamily:'Raleway',fontSize:16,fontWeight:400,margin:0,textAlign:'left',color:'#808080',marginTop:12}}>Developing tailor-made solutions using the latest technologies to meet your specific business requirements and goals.</p>
                </div>
              </div>
            </div>
      

            </div>


        </div>
        
      
    </div>
  )
}

export default About
