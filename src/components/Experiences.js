import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Allan from '../assets/Allan.png'
import Colladome from '../assets/colladome-logo.png'
import Samsung from '../assets/samsung-logo.png'
import Mitra from '../assets/mitra-logo.png'
import Outshade from '../assets/outshade-logo.png'
import SRM from '../assets/SRM.png'
import Puris from '../assets/puris-zerox.png'



import '../components/Experience.css'

const Experiences = () => {
  return (
    <div>
        <div style={{}}>
            <div className="experience-head">
            <div style={{height:1,width:'80%',backgroundColor:'#656565'}}>
            </div>
            <div style={{marginTop:12,marginLeft:20,marginRight:20}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
            <p style={{fontSize:18,color:'#808080',fontFamily:'Raleway',fontWeight:400}}>Experiences</p>
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <button className='text-btn'>Experience 2022-2023</button>
              <p style={{color:'#808080',paddingRight:6,paddingLeft:6}}>/</p>
            </div>
            </div>
            </div>
            <p className="about-bold" style={{margin:0,fontFamily:'Raleway',fontWeight:800,color:'#656565',textAlign:'center',marginTop:55,textDecoration:'underline'}}>My Experiences</p>

            </div>
        <VerticalTimeline>
            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May-Aug 2023"
                    iconStyle={{ background: '#252525', color: '#fff' }}
                    icon={<img src={Samsung} style={{objectFit:'contain',width:46,height:46}}alt="Samsung Logo" />}
                >
                    <h3 className="vertical-timeline-element-title">Samsung Prism</h3>
                    <h4 className="vertical-timeline-element-subtitle">AI/ML Research Intern</h4>
                    <p>
                    Emotional Intelligence of Emoji Combination & Research on Demographic Usage of Emoji Combinations
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    date="Oct-Feb 2022-2023"
                    iconStyle={{ background: '#E8E8E8', color: '#fff' }}
                    icon={<img src={Outshade} style={{objectFit:'contain',width:46,height:46}}alt="Outshade Logo" />}
                >
                    <h3 className="vertical-timeline-element-title">Outshade Degital Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">UI/UX Designer</h4>
                    <p>
                    Developed User Interfaces for Softwares for Power Grid Corporation of India Limited based on daily client meets 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sep-Dec 2022"
                    iconStyle={{ background: '#252525', color: '#fff' }}
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    icon={<img src={Colladome} style={{objectFit:'contain',width:46,height:46}}alt="Colladome Logo" />}
                >
                    <h3 className="vertical-timeline-element-title">Colladome</h3>
                    <h4 className="vertical-timeline-element-subtitle">Graphic & UI/UX Designer</h4>
                    <p>
                    Designed User Interfaces for a XR Web Application on collaboration with Designers and Brand Marketing elements
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April-Aug 2022"
                    iconStyle={{ background: '#E8E8E8', color: '#fff' }}
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    icon={<img src={Mitra} style={{objectFit:'contain',width:46,height:46}}alt="Mitra Logo" />}
                >
                    <h3 className="vertical-timeline-element-title">Mitra Fintech</h3>
                    <h4 className="vertical-timeline-element-subtitle">UI/UX Designer</h4>
                    <p>
                    Developed Brand & User Interface Design for Cab & B2B Marketing Applications by collaborating with Developers and also designed several Posters and Logos
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Oct 2022 - Jun 2023"
                    iconStyle={{ background: '#252525', color: '#fff' }}
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    icon={<img src={SRM} style={{objectFit:'contain',width:46,height:46}}alt="SRM Logo" />}
                >
                    <h3 className="vertical-timeline-element-title">SRM University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
                    <p>
                    Participated in Inhouse project in collaboration with Agricultural Department and Building a Web Application of Digitalising the Greenery of SRM University
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Aug - October 2023"
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    iconStyle={{ background: '#E8E8E8', color: '#fff' }}
                    icon={<img src={Puris} style={{objectFit:'contain',width:46,height:46}}alt="PurisZeroX Logo" />}
                >
                    <h3 className="vertical-timeline-element-title">Puris ZeroX</h3>
                    <h4 className="vertical-timeline-element-subtitle">Freelancing</h4>
                    <p>
                    Developed a Website for ZeroX showroom by Refurbishing the Website with more visual appealing User Interface with a Stressless and more engaging User Experience
                    </p>
                </VerticalTimelineElement>
                
               
        </VerticalTimeline>
        </div>

      
    </div>
  )
}

export default Experiences
