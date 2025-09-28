import React, { useState } from 'react';
import instagram from '../assets/img/instagram.png';
import linkedin from '../assets/img/linkedin.png';
import mail from '../assets/img/mail.png';
import vector from '../assets/img/Vector.png';
import '../Test.css';
import '../Test2.css';

function Footer({ type }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      alert('Please fill all your details!');
      return;
    }

    // Show the details sent
    alert(`Your details have been sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Optionally, clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    {/* i used ternary operator */}
      {type === 'portfolio' ? (
        <div className='footer'>
          <div className="section-title-footer">
            <h2 className='text'>
              Projects <div className="section-underline"></div>
            </h2>
          </div>

          <div className='frame-form'>
            <form className='form' onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className='label'>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className='label'>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className='label'>Message</label>
                <textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button className="send-btn" type="submit">Send</button>
            </form>

            {/* <div className='footer-icon'>
              <div className='icon'><img src={instagram} alt="instagram" /></div>
              <div className='icon'><img src={linkedin} alt="linkedin" /></div>
              <div className='icon'><img src={mail} alt="email" /></div>
            </div> */}
            <div className={type === 'portfolio' ? 'footer-icon' : 'footer-icon'}>
                <div className='icon'>   
                  {/* I dont have instagram so i think it will open some other page */}
                  <a href="https://www.instagram.com/snithija" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>

                <div className='icon'>
                  <a href="https://www.linkedin.com/in/snithija-raavi-158a98270" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </div>

                <div className='icon'>
                  <a href="mailto:snithijaraavi25@gmail.com">
                    <img src={mail} alt="email" />
                  </a>
                </div>
            </div>

            <div className='ftext'>Snithija Raavi 2025</div>
          </div>

          <img src={vector} alt="vector" className='footer-wave' />
        </div>
      ) : (
        <div className='footer-about'>
          {/* Similar code for 'about' type */}
          <div className="section-title-footer-about">
            <h2 className='text'>Projects <div className="section-underline"></div></h2>
          </div>

          <div className='frame-form-about'>
            <form className='form-about' onSubmit={handleSubmit}>
              <div className="form-group-about">
                <label htmlFor="name" className='label'>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group-about">
                <label htmlFor="email" className='label'>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group-about">
                <label htmlFor="message" className='label'>Message</label>
                <textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button className="send-btn-about" type="submit">Send</button>
            </form> 
            {/* for forms i used ternary operation  */}

            {/* <div className='footer-icon-about'>
              <div className='icon'><img src={instagram} alt="instagram" /></div>
              <div className='icon'><img src={linkedin} alt="linkedin" /></div>
              <div className='icon'><img src={mail} alt="email" /></div>
            </div> */}

            <div className={type === 'portfolio' ? 'footer-icon' : 'footer-icon'}> 
                <div className='icon'>   
                  {/* I dont have instagram so i think it will open some other thing*/}
                  <a href="https://www.instagram.com/snithija" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>

                <div className='icon'>
                  <a href="https://www.linkedin.com/in/snithija-raavi-158a98270" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </div>

                <div className='icon'>
                  <a href="mailto:yourname@example.com">
                    <img src={mail} alt="email" />
                  </a>
                </div>
            </div>


            <div className='ftext-about'>Snithija Raavi 2025 </div>
          </div>

          <img src={vector} alt="vector-about" className='footer-wave-about' />
        </div>
      )}
    </>
  );
}

export default Footer;
