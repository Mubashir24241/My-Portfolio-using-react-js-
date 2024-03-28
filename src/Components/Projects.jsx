import React from "react";
import ProjectBox from "./ProjectBox";

import CashImage from "../images/cash2.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";

const Projects = () => {
  return (

    <div>

      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Levels" />
        <ProjectBox projectPhoto={CashImage} projectName="Cash Calculator" />
        <ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />
        <ProjectBox projectPhoto={BackpackImage} projectName="Backpack" />
      </div>
      
    </div>
  );
};

export default Projects;
