import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hello there!, let me introduce myself, I'm Juan Funes from Buenos Aires, Argentina. Currently studying a degree in computer science at Hurlingham National University."
        },
        {
          id: "second-p-about",
          content:
            "Now I'm focusing on college, and deepening web development, studying React, Node Js, Express Js, MongoDB and Typescript. By carrying out personal projects, i'm actively building my portfolio."
        },
        {
          id: "third-p-about",
          content:
            "My goal now is to master Frontend, Backend and Web3 technology and become a Fullstack Web3 Developer."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div >
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me &#128214;</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
