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
import Flip from 'react-reveal/Flip';


function Projects() {
    return(  
        <div className="portfolio" style={{overflow:"hidden"}}>
        <Flip right duration={2000}>
        <a href="#" className="card">
          <div className="content">
            <span>HTML/CSS</span>
          </div>
          <div className="image">
            <img src={one} alt="" />
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
            <span>HTML/CSS/JAVASCRIPT...</span>
          </div>
          <div className="image">
            <img src={two} alt="" />
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
            <span>React/Flux/Jest...</span>
          </div>
          <div className="image">
            <img src={three} alt="" />
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
            <span>HTML/Javacript/API...</span>
          </div>
          <div className="image">
            <img src={four} alt="" />
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
            <span>MERN/Jest...</span>
          </div>
          <div className="image">
            <img src={five} alt="" />
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
            <span>HTML/CSS/Flexbox...</span>
          </div>
          <div className="image">
            <img src={six} alt="" />
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
            <span>MERN/Typescript/Jest...</span>
          </div>
          <div className="image">
            <img src={seven} alt="" />
          </div>
        </a>
      
        <a href="#" className="card">
          <div className="content">
            <span>HTML/API/Javascript</span>
          </div>
          <div className="image">
            <img src={eight} alt="" />
          </div>
        </a>

        <a href="#" className="card">
            <div className="content">
              <span>HTML/CSS/Javascript</span>
              </div>
            <div className="image">
              <img src={nine} alt="" />
            </div>
          </a>

           
        <a href="#" className="card">
            <div className="content">
            <span>HTML/API/Javascript</span>
            </div>
            <div className="image">
              <img src={ten} alt="" />
            </div>
          </a>
        </Flip>
      </div>
    )
}

export default Projects