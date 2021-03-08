/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import Shake from 'react-reveal/Shake';
import Slide from 'react-reveal/Slide';
/* import Flash from 'react-reveal/Flash';

 */
import { useSpring, animated } from 'react-spring';
import Roll from 'react-reveal/Roll';
import Reveal from 'react-reveal/Reveal';


function About() {
/*   const [isReady, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []); */

  let x = "About Me"
  let splited = x.split("")
  
  const second = document.getElementsByClassName('aboutme');
  function Animate2() {
    setTimeout(() => {
      Array.from(second).forEach((letter, index) => {
        setTimeout(() => {
          if (letter !== ' ') {
            letter.classList.add('show');
          }
        }, index * 100);
      });
    }, 400);
  }
  Animate2()
  return (
    <>
      <div className="about" >
        <div className="about-description">
          <Slide left duration={1000}>
          <h2>
            About Me
          </h2>
         <div className="about-section">
         <p className="myIntro">
            The primary area of my interest is FrontEnd but I do
            enjoy BackEnd.Afterall, everything is JavaScript and I have
            a deep relationship with JavaScript. What I am seeking is to build
            something great that would make people life easier.Do you remember
            MS-DOS a long time ago ? Well, that was the first time I wrote my code.
            And here I am now,
            coding everyday.
          </p>
          <br />
          <p>
            I have  developed several applications and websites
            sice I am onto the world of web development but
            I don’t like to define myself by the work I’ve done.
            I define myself by the work I want to do. Skills can be learned/taught, personality
            is inherent.I prefer to keep learning, continue challenging myself, and do
            interesting things that matter.
          </p>

          <br />
          <p className="myIntroLast">
            Besides my professional life, I love sports, especially basketball.
            Also I love to cook
            and sometimes I do Yoga too.
          </p>
         </div>
          <br />
          </Slide>
        </div>
        <Slide right duration={4000}>
        <div id="holder" style={{ marginTop: '50px'}}>
  </div>
        </Slide>
        
      </div>

    </>
  );
}

export default About;
