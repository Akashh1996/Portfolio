/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
/* import MouseParticles from 'react-mouse-particles';

 */
/* import Typewriter from 'typewriter-effect';

 */
import AiOutlineArrowDown from "react-icons/fa"
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import './App.css';
import Nav from './nav/Nav';
import About from './About';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';import Particles from 'react-particles-js';
import GetAppIcon from '@material-ui/icons/GetApp';

function App() {
  const [isOpen, setOpen] = useState('');
  const name = 'Hi,';
  const name3 = "I’m Akash,";
  const name1 = 'web developer';

  // eslint-disable-next-line no-unused-vars

  const splited = name.split('');
  const name2 = name1.split('');
  const name4 = name3.split('');
  const letters = document.getElementsByClassName('any');

  const text = 'Line one\nLine two\nLine three';

  const my = text.split('\n');
  console.log(my);

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
  /*  console.log(x);

  setTimeout(() => {
    setTrue(true);
  }, 6000);

  console.log(isTrue); */

  return (
    <div className="wrapper">
       <Particles className="particle"
            params={{
                particles: {
                    number: {
                        value: 0,
                        density: {
                            enable: true,
                            value_area: 1500
                        },
                        color: "red"
                    },
                    line_linked: {
                        enable: true
                    },
                    move: {
                        speed: .5
                    },
                    line_linked: {
                      color: '#08fdd8',
                      opacity: .1
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 800,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 800,
                          "size": 80,
                          "duration": 2,
                          "opacity": 0.8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 400,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                
                 }    
            }}    
        />
      <div className="body">
        <div className="Logo1" onClick={() => setOpen(true)}>
            <div className="myMenu">
            <Roll>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            </Roll>

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
        <Fade bottom delay={1600} duration={1400}>
          <Nav className="myelem" />
        </Fade>

      </div>
       <div className="scroll-wrapper">
       <div className="scroll">
        <p> <span>scroll down</span> <span style={{color:"#fff"}} > <GetAppIcon /> </span> </p>
      </div> 
       <div className="scroll2">
        <p> <span>scroll down</span> <span style={{color:"#fff"}} > <GetAppIcon /> </span> </p>
      </div> 
       </div>

    {/*   <div
        className={isOpen ? 'menu-items' : 'menu-item-hide'}
        onClick={() => setOpen(false)}
      >
        <h1 style={{ display: 'none' }}>Its menu</h1>
      </div> */}
      <About />
    </div>
  );
}

export default App;
