import '../Test.css';
import image from '../assets/img/girl.png';
import yoga from '../assets/img/yoga.png';
import phone from '../assets/img/phone.png';
import book from '../assets/img/book.png';
import Navbar from '../components/Navbar';// it is showing error but it's working fine without any error
import Footer from '../components/Footer';
// import React, { useState } from 'react';

function Portfolio() {

  
  // scroll to projects section
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // open LinkedIn in new tab
  const handleOpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/snithija-raavi-158a98270", "_blank");//www.linkedin.com/in/snithija-raavi-158a98270
  };


  return (
    <>
    {/* girl image */}
      
        <div className="img-container">
          <div className="image">
            <img src={image} alt="girl" />
          </div>
        </div>

    {/* imported nav from components folder */}
        <Navbar />

    {/* Intro */}
    <div className='main'>
        <div className='intro'>
          <p className='ui'>UI/UX Designer</p>
          <div className='content'>
            <h1 className='title'>Hello, my name is Snithija Raavi</h1>
          </div>
          <div>
            <h1 className='sub'>
              Hi! I’m a software developer. 
              I love building web applications using React, Vite, Django, and Spring Boot. 
              I enjoy creating clean, user-friendly solutions and learning new technologies along the way.
            </h1>
            <div className='btn'>
              {/* scroll to projects */}
              <button className='primary' onClick={handleScrollToProjects}>
                Projects
              </button>

              {/* open LinkedIn */}
              <button className='secondary' onClick={handleOpenLinkedIn}>
                LinkedIn
              </button>
            </div>
          </div>
        </div>
    {/* projects section */}
        <div className='projects' id='projects'>
          <div className="section-title">
            <h2 className='text'>
              Projects <div className="section-underline"></div>
            </h2>
          </div>

          {/* project card 1 */}
          <div className="project-block">
            <div className="project-info">
              <div className='frame1'>
                <h2 className='pro'>Fitness-Tracking</h2>
                <p className='pro-text'>
                  A web application to track workouts, monitor progress, 
                  and set fitness goals. Designed for a clean, user-friendly 
                  interface and real-time data visualization.
                </p>
                <button className="project-btn">View Project</button>
              </div>
            </div>
            <div className="project-image">
              <img src={yoga} alt="Project visual" />
            </div>
          </div>

            {/* project card 2 */}
          <div className="project-block">
            <div className="project-image">
              <img src={book} alt="Project visual" />
            </div>
            <div className="project-info">
              <div className='frame1'>
                <h2 className='pro'>E-commerce</h2>
                <p className='pro-text'>
                  An online store platform with product listings, 
                  shopping cart, and secure checkout. Focused on 
                  smooth user experience and responsive design for all devices.
                </p>
                <button className="project-btn">View Project</button>
              </div>
            </div>
          </div>

            {/* project card 3 */} 
          <div className="project-block">
            <div className="project-info">
              <div className='frame1'>
                <h2 className='pro'>Mobile Development</h2>
                <p className='pro-text'>
                  A mobile app built for iOS/Android to deliver seamless 
                  functionality and intuitive navigation. Implements features 
                  like notifications, cross-platform compatibility.
                </p>
                <button className="project-btn">View Project</button>
              </div>
            </div>
            <div className="project-image">
              <img src={phone} alt="Project visual" />
            </div>
          </div>
        </div>

        {/* imported footer from footer components */}
        <Footer type="portfolio" />
      </div>
    </>
  );
}

export default Portfolio;
