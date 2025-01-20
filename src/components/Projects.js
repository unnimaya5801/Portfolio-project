// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <div className="row mt-4">
          {/* Example Project 1 */}
          <div className="col-md-4">
            <div className="card">
              <img src="project1-image.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">A brief description of Project 1.</p>
                <a href="https://github.com/yourusername/project1" target="_blank" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          {/* Add more projects similarly */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
