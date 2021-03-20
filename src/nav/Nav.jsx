import React from 'react';

import './nav.scss';

function NavBar() {
  return (
    <>
      <div className="text-zone">
      <div className="typewriter">
        <p className="intro">Front End Developer / Back End Developer</p>
      </div>
      <div className="button-area">
          <button type="button">
            {' '}
            <span className="contact">Say Hello</span>
            {' '}
          </button>
      </div>
      </div>

    </>
  );
}

export default NavBar;
