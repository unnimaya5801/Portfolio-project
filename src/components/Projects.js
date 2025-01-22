import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <div className="row mt-4">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">A brief description of Project 1.</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">A brief description of Project 2.</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">A brief description of Project 3.</p>
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

