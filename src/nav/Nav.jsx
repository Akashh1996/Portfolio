/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

import './nav.scss';

function NavBar() {
/*   const [isReady, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []); */

  return (
    <>
      <div className="typewriter">
        <Typewriter
          style={{ color: 'red' }}
          options={{
            strings: [
              'Hello there !!',
              'I am a front end developer',
              'I am also a backend developer',
              'I love to build awesome things',
              'Do you wanna know me more?',
              'Hit the contact button below',
              'Let"s have a talk',
              'I will buy you a coffee :D',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 0,
            delay: 90,
          }}
        />
      </div>
      <div className="button-area">
        <Flip top>
          <button type="button">
            {' '}
            <Bounce top cascade delay={1800} duration={2000}>Contact Me!</Bounce>
            {' '}
          </button>
        </Flip>
      </div>

    </>
  );
}

export default NavBar;
