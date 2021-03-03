/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
/* import MouseParticles from 'react-mouse-particles';
 */
/* import Typewriter from 'typewriter-effect';
 */
import Particles from 'react-particles-js';

import './App.css';
import Nav from './nav/Nav';
import About from './About';

function App() {
  const [isOpen, setOpen] = useState('');
  const name = 'Hi,';
  const name3 = "I'm Akash,";
  const name1 = 'Web Developer';

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
        }, index * 100);
      });
    }, 400);
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
    }, 800);
  }
  const third = document.getElementsByClassName('third');
  function Animate3() {
    setTimeout(() => {
      Array.from(third).forEach((letter, index) => {
        setTimeout(() => {
          if (letter !== ' ') {
            letter.classList.add('show');
          }
        }, index * 100);
      });
    }, 1200);
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
      <Particles
        className="particle"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: 'red',
                blur: 50,
              },
            },
          },
        }}

      />
      <div className="body">
        <div className="Logo1" onClick={() => setOpen(true)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        {/*    <div className="header">
        <div className="Logo">
          <h1>A</h1>
        </div>

        <div className="menu-bars">
          <div className="menu" />
          <div className="menu" />
          <div className="menu" />
        </div>
      </div> */}

        <div className="main">
          <div className="name seperator">
            {splited.map((letter) => (
              <li id={letter} className="any one letter" key={Math.random()}><h1>{letter}</h1></li>
            ))}
          </div>
          <div className="clearfix" />
          <div className="seperator seconddiv">
            {name4.map((letter) => (
              <li id={letter} className={letter === 'A' ? 'second two letter akash' : 'second two letter'} key={Math.random()}><h1>{letter}</h1></li>
            ))}
          </div>
          <div className="clearfix" />
          <div className="seperator thirddiv">
            {name2.map((letter) => (
              <li id={letter} className="third three letter" key={Math.random()}><h1>{letter}</h1></li>
            ))}
          </div>
          <div className="clearfix" />

        </div>

        {/*   <div>
        {
                text.split('\n').map((str) => str.split('').map((f) => <span>{f}</span>))
              }
      </div> */}
        {/*  <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      /> */}

        <div style={{ marginTop: '20px' }} />
        <Nav className="myelem" />

      </div>
      {/*  <div className="scroll">
        <p>Scroll Down</p>
      </div> */}
      <div
        className={isOpen ? 'menu-items' : 'menu-item-hide'}
        onClick={() => setOpen(false)}
      >
        <h1 style={{ display: 'none' }}>Its menu</h1>
      </div>
      <About />
    </div>

  );
}

export default App;
