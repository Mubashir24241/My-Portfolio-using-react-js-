import React from "react";
import Skills from "./Skills.jsx";
// import Avatar from "../images/212.png";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>MUBASHIR AHMAD MIR</b> and I am from BARAMULLA,
            INDIA. I'm a <b>web developer</b> and a Last year
            university student pursuing <b>B.TECH in Computer Science</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding <b>I love to play chess</b> and do
            photography in my spare time.
          </p>
          <a href="https://drive.google.com/file/d/1BzG_zRViJGSCJmFTlGWdxSmSvLIcupip/view?usp=sharing" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        {/* <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt> */}

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
        <Skills skill="MySQL" />
        <Skills skill="Java" />
        <Skills skill="PHP" />
        <Skills skill="Bootstrap" />
        <Skills skill="Python" />
        <Skills skill="AndroidDevelopment" />
      </div>
    </>
  );
};

export default About;
