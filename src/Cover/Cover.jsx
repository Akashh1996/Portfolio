
import React, { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./cover.scss"
import Fade from "react-reveal/Fade"
import PhoneIcon from '@material-ui/icons/Phone';


function App() {
  const [isOpen, setOpen] = useState(false);
  const firstString = 'Hi,';
  const secondString = "I’m Akash,";
  const thirdString = 'web developer.';

  function split(string) {
      return string.split('')
  }

 function animate(order ,time1, time2) {
     return setTimeout(() => {
        Array.from(order).forEach((letter, index) => {
          setTimeout(() => {
              letter.classList.add('show');
          }, index * time1);
        });
      }, time2);
 }

    const first = document.getElementsByClassName('first');
    const second = document.getElementsByClassName('second');
    const third = document.getElementsByClassName('third');

    
    animate(first, 150,100)
    animate(second, 100,400)
    animate(third, 80,1100)


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
              <a href="https://www.linkedin.com/in/akash-sapkota-front-end-developer/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
              <a href="https://github.com/Akashh1996" target="_blank" rel="noreferrer"><GitHubIcon /></a>
              <a href="https://www.facebook.com/theblack.crow.338/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
              <a href="tel:+34632030253" target="_blank" rel="noreferrer"><PhoneIcon /></a>
            </div>
        </div>

        <div className="cover-name">
           <h1>
           {split(firstString).map((letter) => (
              <span id={letter} className="span letter first" key={Math.random()}>{letter}</span>
            ))}
            <br/>
            {split(secondString).map((letter) => (
              <span id={letter} className='second two letter span'  key={Math.random()}>{letter}</span>
            ))}
            <br/>
            {split(thirdString).map((letter) => (
                <span id={letter} className="third three letter span" key={Math.random()}>{letter}</span>
            ))}
            <br/>
           </h1>
        </div>

        <Fade bottom delay={200} duration={1200}>
        <div className="cover-info">
                <div className="title-wrapper">
                    <p className="title">Front End Developer / Back End Developer</p>
                </div>
                <div className="button-wrapper">
                    <button type="button">
                        <span className="contact">Say Hello</span>
                    </button>
                </div>
        </div>
        </Fade> 
        </div>

    {/*   <About />
      <Projects/>
      <Form />  */}
    </div>
  );
}

export default App;
