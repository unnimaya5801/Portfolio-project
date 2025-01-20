// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <p className="text-center mt-3">
          Hi, I'm [Your Name], a passionate developer focused on web technologies. I enjoy building interactive websites and applications.
        </p>
        <div className="text-center">
          <img src="your-image.jpg" alt="Your Name" className="img-fluid rounded-circle" style={{ width: '150px' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
