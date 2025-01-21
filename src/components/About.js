import React from 'react';
import './About.css'; // Import custom styles if needed

const About = () => {
  return (
    <div className="about-page py-5">
      <div className="container">
        {/* About Header Section */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            {/* Profile Picture */}
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="rounded-circle img-fluid mb-3" 
            />
          </div>
          <div className="col-md-8">
            <h1 className="display-4">About Me</h1>
            <p className="lead">
              I am a passionate developer with a knack for creating innovative solutions to real-world problems. 
              With experience in both frontend and backend development, I love building interactive and efficient applications.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="skills py-5">
          <h2 className="text-center mb-4">My Skills</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="fas fa-code fa-3x mb-2 text-primary"></i>
              <h5>Frontend Development</h5>
              <p>React, HTML, CSS, JavaScript, Bootstrap</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-database fa-3x mb-2 text-primary"></i>
              <h5>Backend Development</h5>
              <p>Java Spring Boot, Node.js, PostgreSQL</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-laptop-code fa-3x mb-2 text-primary"></i>
              <h5>Other Skills</h5>
              <p>Git, Agile Development, REST APIs</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education py-5 bg-light">
          <h2 className="text-center mb-4">Education</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">B Tech</h5>
                  <p className="card-text">
                    <strong>Institution:</strong> Rajiv Gandhi Insttute Of Technology <br />
                    <strong>Year:</strong> 2020 - 2024
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">High School Diploma</h5>
                  <p className="card-text">
                    <strong>Institution:</strong> ABC High School <br />
                    <strong>Year:</strong> 2016 - 2018
                  </p>
                  <p className="card-text">
                    Excelled in mathematics and computer science, laying the foundation for my career in technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


