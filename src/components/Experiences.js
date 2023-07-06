import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Allan from '../assets/Allan.png'
import Colladome from '../assets/colladome-logo.png'
import Samsung from '../assets/samsung-logo.png'
import Mitra from '../assets/mitra-logo.png'
import Outshade from '../assets/outshade-logo.png'


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
              <button className='text-btn'>Experience</button>
              <p style={{color:'#808080',paddingRight:6,paddingLeft:6}}>/</p>
            </div>
            </div>
            </div>
            </div>
        <VerticalTimeline>
            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May-Aug 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src={Colladome} style={{objectFit:'contain',width:46,height:46}}alt="Colladome Logo" />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    date="Oct-Feb 2022-2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<Allan />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sep-Dec 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    // icon={<Allan />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April-Aug 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    // icon={<Allan />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    // icon={<Allan />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    contentStyle={{ background: '#252525', color: '#fff' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<Allan />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                
               
        </VerticalTimeline>
        </div>

      
    </div>
  )
}

export default Experiences
