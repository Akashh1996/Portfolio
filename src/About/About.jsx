/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import Shake from 'react-reveal/Shake';
import Slide from 'react-reveal/Slide';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { useSpring, animated } from 'react-spring';
import Roll from 'react-reveal/Roll';
import Reveal from 'react-reveal/Reveal';
import "./about.scss"


function About() {
  return (
    <>
      <div className="about" >
        <div className="about-description">
          <Slide left duration={2000}>
          <header>
          <h2>
            About Me
          </h2>
          </header>
         <div className="about-section">
         <p className="myIntro">
            The primary area of my interest is Front end but I do
            enjoy Back end. Afterall, everything is <span className="keyword">JavaScript</span> and I have
            a deep relationship with JavaScript. What I am seeking is to build
            something great that would make people life easier.
          </p>
          <br />
          <p>
            I have  developed several applications and websites
            since I am onto the world of web development but
            I don’t like to define myself by the work I’ve done.
            I define myself by the work I want to do. Skills can be learned, personality
            is inherent.I prefer to keep learning, continue challenging myself, and do
            interesting things that matter.
          </p>
          <br/>
          <p >
            Besides my professional life, I love sports, especially basketball.
            Also I love to cook
            and sometimes I do Yoga too.
          </p>
          <br/>
          <p className="myIntroLast"><h3>My Skills</h3> I create responsive websites that are user interactive, with best pratices.
                The main area of my expertise is <span className="keyword">MERN</span> stack along with <span className="keyword">clean code</span> and <span className="keyword">SOLID</span> principles. I also 
                focus on <span className="keyword">testing</span> to make sure the funcitionalities. I have worked with CSS frameworks and
                libraries like Tailwind, Bootstrap and and JavaScript frameworks like <span className="keyword">React</span>,material UI, Angular.
                If you want to know me profesionally, download my CV.
                </p>
            <button type="button" className="button-resume"> <span className="resume">Resume</span> <span> <ArrowDownwardIcon style={{fontSize:"1rem", marginTop:"3px"}} /> </span> </button>
         </div>
          <br />
          </Slide>
        </div>
        <Slide right
         duration={2000}>
        <div id="holder" style={{ marginTop: '50px'}}>
        </div>
        </Slide>
      </div>

    </>
  );
}

export default About;
