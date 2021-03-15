/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
/* import MouseParticles from 'react-mouse-particles';

 */
/* import Typewriter from 'typewriter-effect';

 */

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Icon, InlineIcon } from '@iconify/react';
import codewarsIcon from '@iconify-icons/simple-icons/codewars';
import AiOutlineArrowDown from "react-icons/fa"
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import './App.scss';
import Nav from './nav/Nav';
import About from './About';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Particles from 'react-particles-js';
import GetAppIcon from '@material-ui/icons/GetApp';
import MySkills from "./mySkills/MySkills"
import Projects from "./Projects/Projects"
import Form from "./Form/Form"

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isPrev,setPrev] = useState(false)
  const name = 'Hi,';
  const name3 = "I’m Akash,";
  const name1 = 'web developer';

  // eslint-disable-next-line no-unused-vars

  const splited = name.split('');
  const name2 = name1.split('');
  const name4 = name3.split('');
  const letters = document.getElementsByClassName('any');

  const text = 'Line one\nLine two\nLine three';


  const body = document.querySelector("body")
  const rect = document.querySelector("rect")
  const about = document.querySelector("#holder")

  function changeMe() {
    if(!isPrev){
      body.style.background = "#fff"
      body.style.color = "black"
      holder.style.display = "none"
      setPrev(true)
    }else{
      body.style.background = "#1d1d1d"
      body.style.color = "#fff"
      holder.style.display = "block"
      setPrev(false)
    }
  }


  /*   const d = my.split('');
 */
  /*   console.log(d);
 */ function Animate() {
    setTimeout(() => {
      Array.from(letters).forEach((letter, index) => {
        setTimeout(() => {
          if (letter !== ' ') {
            letter.classList.add('show');
          }
        }, index * 150);
      });
    }, 100);
  }

  const second = document.getElementsByClassName('second');
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
  const third = document.getElementsByClassName('third');
  function Animate3() {
    setTimeout(() => {
      Array.from(third).forEach((letter, index) => {
        setTimeout(() => {
          if (letter !== ' ') {
            letter.classList.add('show');
          }
        }, index * 80);
      });
    }, 1100);
  }
  let x = 0;

  if (x === 0) {
    Animate();
    Animate2();
    Animate3();
    x = 1;
  }

  console.log(isOpen)

  function handleClick() {
    if(isOpen){
      setOpen(false)
    }else
    setOpen(true)
  }

  return (
    <div className="wrapper">
      <div className="body">
        <div className="Logo1" onClick={() => handleClick()}>
            <div className="myMenu">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />

            </div>
        </div>

        <div className="socail-media-wrapper">
            <div className="social-media">
              <a href="https://www.linkedin.com/in/akash-sapkota-front-end-developer/" target="_blank"><LinkedInIcon /></a>
              <a href="https://github.com/Akashh1996" target="_blank"><GitHubIcon /></a>
              <a href="https://www.facebook.com/theblack.crow.338/" target="_blank"><FacebookIcon /></a>
            </div>
        </div>
        <div className="main">
        <div className="clearfix"></div>
           <h1>
           {splited.map((letter) => (
              <span id={letter} className="span any letter" key={Math.random()}>{letter}</span>
            ))}
            <div className="clearfix"></div>

            {name4.map((letter) => (
              <span id={letter} className='second any two letter span'  key={Math.random()}><h1>{letter}</h1></span>
            ))}
            <div className="clearfix"></div>
            {name2.map((letter) => (
                <span id={letter} className="third any three letter span" key={Math.random()}><h1>{letter}</h1></span>
            ))}
            <div className="clearfix"></div>

           </h1>
        </div>
        <Fade bottom delay={200} duration={1200}>
          <Nav className="myelem" />
        </Fade>
       </div>
      <About />
      <Projects/>
      <Form /> 
    </div>
  );
}

export default App;
