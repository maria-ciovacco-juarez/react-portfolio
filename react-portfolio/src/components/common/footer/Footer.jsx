import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      {/* <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section> */}
      <section className="credit">
        Made by Maria Ciovacco
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Full Stack Development
          </section>
             
        </section>
        <section className="footer-info-center">
          
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            
          </section>
          <section className="footer-info__contact">
            
            <br />
            
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;