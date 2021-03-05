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

function About() {
/*   const [isReady, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []); */

  return (
    <>
      <div className="about" style={{ marginTop: '140px' }}>
        <div className="about-description">
          <h2>About Akash</h2>
          <p>
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
          <p>
            Besides my professional life, I love sports, especially basketball.
            Also I love to cook
            and sometimes I do Yoga too.
          </p>
          <br />

          <h3 className="myskills" style={{ fontSize: '30px' }}>
            Akash's Skills
            ➡
          </h3>
        </div>
        <div id="holder" style={{ marginTop: '50px' }} />
      </div>

    </>
  );
}

export default About;
