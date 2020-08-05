import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <main className="container" id="portfolio">
          <article>
            <div className="row">
              <h1 id="portfolio">
                <strong>Portfolio</strong>
              </h1>
            </div>
            <hr />

            <div className="row">
              <div className="col-md-4 portfolio-pic">
                <img
                  src="https://i.imgur.com/zgmz0Em.png"
                  className="portfolio-pic"
                  alt="Work day calendar application"
                  width="100%"
                />
                <a
                  href="https://a-mollenkopf.github.io/uh-oh-forgotMyPasswordGenerator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Password Generator
                </a>
                <div>
                  <a
                    href="https://github.com/a-mollenkopf/uh-oh-forgotMyPasswordGenerator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Password Generator Github Repo
                  </a>
                </div>
              </div>

              <div className="col-md-4 portfolio-pic">
                <img
                  src="https://i.imgur.com/Kb03AcC.png?1"
                  className="portfolio-pic"
                  alt="bill murray"
                  width="100%"
                />
                <a
                  href="https://a-mollenkopf.github.io/noWorkTodayAPIScheduler/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Work Day Scheduler
                </a>
                <div>
                  <a
                    href="https://github.com/a-mollenkopf/noWorkTodayAPIScheduler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Work Day Scheduler Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 portfolio-pic">
                <img
                  src="https://i.imgur.com/n5KLqvB.png"
                  className="portfolio-pic"
                  alt=""
                  width="100%"
                />
                <a
                  href="https://theendisfar.github.io/food-forecaster/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food Forecaster
                </a>
                <div>
                  <a
                    href="https://github.com/a-mollenkopf/food-forecaster"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Food Forecaster Github Repo
                  </a>
                </div>
              </div>

              <div className="col-md-4 portfolio-pic">
                <img
                  src="https://i.imgur.com/NyDTUA1.png"
                  className="portfolio-pic"
                  alt=""
                  width="100%"
                />
                <a
                  href="https://github.com/a-mollenkopf/wheresMyBurger-express"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Burger App Github repo
                </a>
                <div>
                  <a
                    href="https://intelligent-chaise-23017.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Burger app heroku
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 portfolio-pic">
                <img
                  src="https://i.imgur.com/NSysVJV.png"
                  className="portfolio-pic"
                  alt=""
                  width="100%"
                />
                <a
                  href="https://github.com/a-mollenkopf/shouldITakeNotes-noteTaker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Note taker github repo
                </a>
                <div>
                  <a
                    href="https://agile-basin-60178.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Note taker heroku
                  </a>
                </div>
              </div>
              <div className="col-md-4 portfolio-pic">
                <img
                  src="https://i.imgur.com/iLL1GX4.png"
                  className="portfolio-pic"
                  alt=""
                  width="100%"
                />
                <a
                  href="https://github.com/a-mollenkopf/whoAreMyEmployees-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Employee tracker github repo
                </a>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1fi2-o8Eftv8KRFzegKFN1QPEc5N4KTzM/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Employee tracker in use
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 portfolio-pic">
                <img
                  src="https://i.imgur.com/OvMuRbZ.png"
                  className="portfolio-pic"
                  alt=""
                  width="100%"
                />
                <a
                  href="https://github.com/a-mollenkopf/project-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flex city github repo
                </a>
                <div>
                  <a
                    href="https://blooming-coast-09812.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flex city heroku
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default Portfolio;
