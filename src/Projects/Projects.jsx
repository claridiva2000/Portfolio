import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
  state = {};

  projectdata = {
    photoEffects: {
      name: "Photo Effects",
      youtube: "",
      description:
        "Photo Effects is a group project build by myself and 5 other developers using Agile/Scrum methodology, Trello, and Slack. Every step of the project mimicks the process used in a professional settings to take a product from zero to deployment. ",
      StackUsed: "React, PostgreSQL, Auth0, Cloudinary",
      Github: "https://github.com/photo-effects",
      link: "https://www.photoeffectsapp.com/",
      class: "project project1"
    },
    LambdaQuest: {
      name: "Lambda Quest",
      youtube: "",
      description:
        "Lambda Quest was a project including myself and 4 other developers, meant to challenge us to learn a new framework (Django) and build a game with it using object oriented programing, including authentication and a colorful frontend all in less than 2 weeks. The concept of this game plays on the experience of being a Lambda Student during sprints.",
      StackUsed: "React, PostgreSQL, Django, Bootstrap",
      Github: "https://github.com/lambda-quest/FrontEnd",
      link: "https://lambda-quest.netlify.com/",
      class: "project project5"
    },
    PinkClosets: {
      name: "Pink Closets",
      youtube: "",
      description:
        "Pink Closets is a local KC cleaning and organizing business. This site is fully responsive and mobile friendly. The site is integrated with Square, which enables clients to set appointments and make payments. The next canvas of this project will include an administrative login to a backend where the client can track her customers and update a blog.",
      StackUsed: "React, CSS, Bootstrap",
      Github: "https://github.com/claridiva2000/pinkclosetsdeploy",
      link: "http://pinkclosets.com/",
      class: "project project3"
    },
    SandJ: {
      name: "S & J",
      youtube: "",
      description:
        "A clean professional business site for Smith & Jones Architects using only HTML and CSS ",
      StackUsed: "HTML, CSS",
      Github: "https://github.com/claridiva2000/User-Interface-Project-Week",
      link: "https://claridiva2000.github.io/User-Interface-Project-Week/",
      class: "project project2"
    },
    UWCTool: {
      name: "UWC Tool",
      youtube: "",
      description:
        "This is a very simple app I built within 8 weeks of learning how to code. I used this app to increase my productivity at SelectQuote by over 30% during a time where the department was both backlogged and understaffed. The app includes all of the verbiage used in communication with clients, which I spent months refining and rewording to get the desired results. Using the app reduces typos and mistakes, and reduces the time it takes to create questionnaires as they no longer require being typed by hand. A version of this is still being used by employees at SelectQuote to this day. I've included this project not as an example of 'great code', but as an example of problem-solving, initiative, and making a real-world impact that ultimately saved the company money in the form of increased efficiency and not needing to replace employees.",
      StackUsed: "HTML, CSS, Javascript",
      Github: "https://github.com/claridiva2000/UWC-Tool",
      link: "https://claridiva2000.github.io/UWC-Tool/#footer1",
      class: "project project4"
    }
  };

  render() {
    return (
      <section className="projects-container">
        <h3>Projects</h3>
        <h4>Click to learn more about my projects.</h4>

        <div className="projects">
          <div className="project project1">
            {this.projectdata.photoEffects.name}
          </div>
          <div className="project project5">project 5</div>
          <div className="project project3">project 3</div>
          <div className="project project2">project 2</div>
          <div className="project project4">project 4</div>
        </div>
      </section>
    );
  }
}

export default Projects;
