import React from 'react'
import Puris from '../assets/Puriszerox.png'
import Woodie from '../assets/woodie.png'
import Roomate from '../assets/Roomate.png'
import Arrow from '../assets/arrow.png'

import '../responsive.css'
import { useNavigate } from "react-router-dom";


const Projects = () => {

    let navigate = useNavigate();


  return (
    <div style={{}}>
         <div className="project-head" style={{marginTop:700}}>
            <div style={{height:1,width:'80%',backgroundColor:'#656565'}}>
            </div>
            <div style={{marginTop:12,marginLeft:20,marginRight:20}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
            <p style={{fontSize:18,color:'#808080',fontFamily:'Raleway',fontWeight:400}}>Projects</p>
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <button className='text-btn'>Woodie</button>
              <p style={{color:'#808080',paddingRight:6,paddingLeft:6}}>/</p>
              <button className='text-btn'>Emotional Intelligence</button>
            </div>
            </div>
            </div>
            <p className="about-bold" style={{margin:0,fontFamily:'Raleway',fontWeight:800,color:'#656565',textAlign:'center',marginTop:55,textDecoration:'underline'}}>My Projects</p>
            </div>

            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',flexWrap:'wrap',marginTop:14}}>

                <div className="project-card" style={{width:360,height:426,marginTop:50}}>
                    <img src={Woodie} style={{width:360,height:280,objectFit:'cover',borderRadius:12}}/>
                    <p style={{margin:0,color:'white',fontFamily:'Raleway',fontWeight:'800',fontSize:20,marginTop:16}}>Woodie</p>
                    <p style={{margin:0,color:'#808080',fontFamily:'Raleway',fontWeight:'500',fontSize:16,marginTop:12}}>Web Application that deigitalises the Greeneries of SRM University using QR scans </p>
                    <div className="view-btn" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
                        <button  style={{width:120,height:38,background:'transparent',borderWidth:0,color:'#808080',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,textDecoration:'underline'}}>
                        Visit site<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                        <button  onClick={() => {
            navigate("/woodie")}} style={{width:120,height:38,background:'#656565',borderWidth:0,color:'white',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,width:152,borderRadius:8,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        View Case study<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                    </div>
                </div>

                <div className="project-card" style={{width:360,height:426,marginTop:50}}>
                    <img src={Roomate} style={{width:360,height:280,objectFit:'cover',borderRadius:12}}/>
                    <p style={{margin:0,color:'white',fontFamily:'Raleway',fontWeight:'800',fontSize:20,marginTop:16}}>Roomate</p>
                    <p style={{margin:0,color:'#808080',fontFamily:'Raleway',fontWeight:'500',fontSize:16,marginTop:12}}>Web Application that deigitalises the Greeneries of SRM University using QR scans </p>
                    <div className="view-btn" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
                        <button  style={{width:120,height:38,background:'transparent',borderWidth:0,color:'#808080',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,textDecoration:'underline'}}>
                        Visit site<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                        <button  style={{width:120,height:38,background:'#656565',borderWidth:0,color:'white',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,width:152,borderRadius:8,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        View Case study<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                    </div>
                </div>

                <div className="project-card" style={{width:360,height:426,marginTop:50}}>
                    <img src={Puris} style={{width:360,height:280,objectFit:'cover',borderRadius:12}}/>
                    <p style={{margin:0,color:'white',fontFamily:'Raleway',fontWeight:'800',fontSize:20,marginTop:16}}>Puris ZeroX</p>
                    <p style={{margin:0,color:'#808080',fontFamily:'Raleway',fontWeight:'500',fontSize:16,marginTop:12}}>Web Application that deigitalises the Greeneries of SRM University using QR scans </p>
                    <div className="view-btn" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
                        <button  style={{width:120,height:38,background:'transparent',borderWidth:0,color:'#808080',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,textDecoration:'underline'}}>
                        Visit site<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                        <button  style={{width:120,height:38,background:'#656565',borderWidth:0,color:'white',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,width:152,borderRadius:8,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        View Case study<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                    </div>
                </div>

                <div className="project-card" style={{width:360,height:426,marginTop:50}}>
                    <img src={Woodie} style={{width:360,height:280,objectFit:'cover',borderRadius:12}}/>
                    <p style={{margin:0,color:'white',fontFamily:'Raleway',fontWeight:'800',fontSize:20,marginTop:16}}>Samsung Emotional Intelligence</p>
                    <p style={{margin:0,color:'#808080',fontFamily:'Raleway',fontWeight:'500',fontSize:16,marginTop:12}}>Web Application that deigitalises the Greeneries of SRM University using QR scans </p>
                    <div className="view-btn" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
                        <button  style={{width:120,height:38,background:'transparent',borderWidth:0,color:'#808080',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,textDecoration:'underline'}}>
                        Visit site<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                        <button  style={{width:120,height:38,background:'#656565',borderWidth:0,color:'white',fontWeight:400,fontFamily:'Raleway',textAlign:'left',fontSize:16,width:152,borderRadius:8,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        View Case study<img src={Arrow} style={{width:12,height:12,marginLeft:8}}/>
                        </button>
                    </div>
                </div>




            </div>


    </div>
  )
}

export default Projects
