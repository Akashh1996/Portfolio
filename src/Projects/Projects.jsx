import React from "react"
import one from "./Screenshot (442).png"
import two from "./Screenshot (452).png"
import three from "./Screenshot (446).png"
import four from "./Screenshot (450).png"
import five from "./Screenshot (444).png"
import six from "./Screenshot (457).png"
import seven from "./Screenshot (454).png"
import eight from "./Screenshot (438).png"
import nine from "./Screenshot (437).png"
import ten from "./Screenshot (459).png"
import Slide from 'react-reveal/Slide';


function Projects() {
    return(  
        <div className="portfolio" >
        <a href="#" className="card">
          <div className="content">
           <span>HTML-CSS-Flexbox ... <span className="see-more"> See More</span></span>
          </div>
          <div className="image">
          <Slide  top duration={2000}>
            <img src={one} alt="" />
          </Slide>
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
          <span>HTML-CSS-JavaScript... <span className="see-more">See More</span></span>
          </div>
          <div className="image">
          <Slide  bottom delay={1000} duration={2000}>
            <img src={two} alt="" />
          </Slide>
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
          <span>React-Flux-Jest... <span className="see-more">See More</span></span>
          </div>
          <div className="image">
          <Slide  top duration={2000}>
            <img src={three} alt="" />
          </Slide>
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
          <span>HTML-JavaScript-API... <span className="see-more">See More</span></span>
          </div>
          <div className="image">
          <Slide  bottom delay={1000} duration={2000}>
            <img src={four} alt="" />
          </Slide>
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
          <span>React-Node-MongoDB... <span className="see-more">See More</span></span>
          </div>
          <div className="image">
          <Slide  top duration={2000}>
            <img src={five} alt="" />
          </Slide>
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
          <span>HTML-Bootstrap-CSS... <span className="see-more">See More</span></span>
          </div>
          <div className="image">
          <Slide  bottom delay={1000} duration={2000}>
            <img src={six} alt="" />
          </Slide>
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
          <span>React-Node-TypeScript... <span className="see-more">See More</span></span>
          </div>
          <div className="image">
          <Slide  top duration={2000}>
            <img src={seven} alt="" />
          </Slide>
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
          <span>HTML-JavaScript-API... <span className="see-more">See More</span></span>
          </div>
          <div className="image">
          <Slide  bottom delay={1000} duration={2000}>
            <img src={eight} alt="" />
          </Slide>
          </div>
        </a>

        <a href="#" className="card">
            <div className="content">
            <span>HTML-JavasCript-API... <span className="see-more">See More</span></span>
              </div>
            <div className="image">
            <Slide  top duration={2000}>
              <img src={nine} alt="" />
          </Slide>
            </div>
          </a>

           
        <a href="#" className="card">
            <div className="content">
            <span>HTML-JavasCript-API... <span className="see-more">See More</span></span>
            </div>
            <div className="image">
            <Slide  bottom delay={1000} duration={2000}>
              <img src={ten} alt="" />
          </Slide>
            </div>
          </a>
      </div>
    )
}

export default Projects