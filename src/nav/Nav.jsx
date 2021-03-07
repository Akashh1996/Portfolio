// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
/* import Bounce from 'react-reveal/Bounce';
 */import Flip from 'react-reveal/Flip';

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
      <div className="text-zone">
      <div className="typewriter">
        <p className="intro">Front End Developer / Back End Developer</p>
      </div>
      <div className="button-area">
          <button type="button">
            {' '}
            <span className="contact">Contact Me!</span>
            {' '}
          </button>
      </div>
      </div>

    </>
  );
}

export default NavBar;
