

//---------------------------------------------------------------------------------
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import './Test.css';
import image from './assets/img/girl.png';
import yoga from './assets/img/yoga.png';
import phone from './assets/img/phone.png';
import book from './assets/img/book.png';
import vector from './assets/img/Vector.png'

function App() {
  

  return (
    <>
    <div>
      {/* image */}
      <div className="img-container">
            <div className="image">
                <img src={image} alt="girl" />
            </div>
        </div>
     {/* Header part */}
     <div className='header'>
      <p className='txt'>Madelyn Torff</p>
      <nav class="navbar">
        <a href="#">About</a>
        <a href="#projects">Projects</a>
        <a href="#">ContactUs</a>
      </nav>
      </div>

      {/* Intro part */}
      <div className='intro'>
       <p className='ui'>UI/UX Designer</p>

       <div className='content'>
        <h1 className='title'>Hello,  my name is Madelyn Torff</h1>
       </div>

       <div >
        <h1 className='sub'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</h1>
        
        {/* Buttons */}
        <div className='btn'>
        <button className='primary'>Projects</button>
        <button className='secondary'>LinkedIn</button>
        </div>
       </div>

      </div>


{/* Projects */}
      <div className='projects' id='projects'>
            <div className="section-title">
              <h2 className='text'>Projects <div className="section-underline"></div></h2>
              {/* <div className="section-underline"></div> */}
            </div>

          {/* Project card 1 */}
          <div className="project-block">
            <div className="project-info">
              <div className='frame1'>
                <h2 className='pro'>Project Name</h2>
                 <p className='pro-text'>created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                    <button className="project-btn">View Project</button>
              </div>
              
            </div>
            <div className="project-image">
              <img src={yoga} alt="Project visual" />
            </div>
          </div>

          {/* Project card 2 */}
          <div className="project-block">
             <div className="project-image">
              <img src={book} alt="Project visual" />
            </div>
            <div className="project-info">
              <div className='frame1'>
                <h2 className='pro'>Project Name</h2>
                 <p className='pro-text'>What was your role, your deliverables, if the project was personal, freelancing.</p>
                    <button className="project-btn">View Project</button>
              </div>
              
            </div>
           
          </div>

          {/* Project card 3 */}
          <div className="project-block">
            <div className="project-info">
              <div className='frame1'>
                <h2 className='pro'>Project Name</h2>
                 <p className='pro-text'>You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
                    <button className="project-btn">View Project</button>
              </div>
              
            </div>
            <div className="project-image">
              <img src={phone} alt="Project visual" />
            </div>
          </div>
         
         
        </div>

      {/* Footer */}
      
      <div className='footer'>

         <div className="section-title-footer">
              <h2 className='text'>Projects <div className="section-underline"></div></h2>
              {/* <div className="section-underline"></div> */}
            </div>
           <div className='frame-form'>
                <form className='form'>

                  <div className="form-group">
                    <label htmlFor="name" className='label'>Name</label>
                    <input type="text" id="name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id="email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className='label'>Message</label>
                    <textarea id="message"></textarea>
                  </div>

                  <button className="send-btn" type="submit">Send</button>

                </form>
                {/* Footer Icons */}
                <div className='footer-icon'></div>
                </div>

                  <img src={vector} alt="vector" className='footer-wave' />
        </div>



   </div>
      




      
    </>
  )
}

export default App

