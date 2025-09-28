import React from 'react';
import '../Test2.css';
import bg from '../assets/img/bg.png';
import Navbar from '../components/Navbar'; //showing error but working fine with no errors
import Footer from '../components/Footer';
// import{Navbar,Footer} from '../components'


function About() {
  return (
    <>
    {/* image */}
      <div className='body'>
        <div className="img-about">
          <div className="image">
            <img src={bg} alt="girl" />
          </div>
        </div>

      {/* imported nav component */}
        <Navbar />  
        {/* in About page in nav bar when i am trying to click projects i am not able to go to project section */}

        <div className='about'>
          <div className='content-about'>
            <h1 className='title-about'>About Me</h1>
          </div>
          <div>
            <h1 className='sub-about'>
              I am Snithija, a passionate software developer from Hyderabad with 
              experience in building web applications using modern technologies 
              like React, Vite, Django, and Spring Boot. I enjoy creating efficient,
              user-friendly solutions and continuously learning new tools and frameworks 
              to improve my skills. In my professional journey, I have worked on projects
              ranging from real-time monitoring systems to project tracking applications, 
              always focusing on clean code, scalability, and performance.

            </h1>
            
            {/* <div className='btn-about'>
              <button className='primary-about'>Resume</button>
            </div> */}
            <div className='btn-about'>
              <button 
                className='primary-about'
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/myResume.pdf';  // path to file in public folder
                  link.download = 'MyResume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Resume
              </button>
            </div>

          </div>
        </div>
        
        {/* imported footer component */}
        <Footer type="about" />
      </div>
    </>
  );
}

export default About;
