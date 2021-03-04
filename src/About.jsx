/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
/* import Flash from 'react-reveal/Flash';

 */
import { useSpring, animated } from 'react-spring';

function About() {
/*   const [isReady, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []); */

  return (
    <>
      <div className="about" style={{ width: '70%' }}>
        <Bounce top cascade duration={4000}>
          <h2>About Akash</h2>
        </Bounce>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <Bounce right cascade delay={1200} duration={3000}>
              <p className="prueba">
                Hello there, I am a full stack web developer from Barcelona.

                There used to be a time when the fancy animations and effects on websites used
                to fascinate me and I used to tell myself I wish if I could build that. And that's
                where my passion for web deveopment was born. Do you remember we used to code on
                MS-DOS a long time ago ? Well, that was the first time I wrote my code.
                And here I am now,
                coding everyday.

              </p>
            </Bounce>
            <br />
            <Bounce left cascade delay={2200} duration={4000}>
              <p>
                I have  developed several applications and websites
                sice I am onto the world of web development but
                I don’t like to define myself by the work I’ve done.
                I define myself by the work I want to do. Skills can be learned/taught, personality
                is inherent.I prefer to keep learning, continue challenging myself, and do
                interesting things that matter.
              </p>
            </Bounce>
            <br />
            <Bounce right cascade delay={3000} duration={5000}>
              <p>
                The primary area of my interest is Front - End but I do
                enjoy Back End, afterall, everything is JavaScript and I have
                a deep relationship with JavaScript. What I am seeking is to build
                something great that would make people life easier.
              </p>
            </Bounce>
            <br />
            <Bounce left cascade delay={4000} duration={8000}>
              <p>
                Besides my professional life, I love sports, especially basketball.
                Also I love to cook
                and sometimes I do Yoga too.
              </p>
            </Bounce>
          </div>
        </div>
        {/* <div style={{ marginTop: '50px' }} className="circle">
          <span>A </span>
        </div> */}

      </div>
    </>
  );
}

export default About;
