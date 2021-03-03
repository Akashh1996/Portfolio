/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import './nav.scss';

function NavBar() {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1500);
  }, []);

  return (
    <>
      { isReady
        && (
        <>
          <div className="typewriter">
            <Typewriter
              style={{ color: 'red' }}
              options={{
                strings: [
                  'Hello there, I am akash',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 0,
                delay: 90,
              }}
            />
          </div>
          <div className="button-area">
            <button type="button">Contact Me!</button>
          </div>

        </>
        )}
    </>
  );
}

export default NavBar;
