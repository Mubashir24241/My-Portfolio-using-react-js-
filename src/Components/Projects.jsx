import React from "react";
import ProjectBox from "./ProjectBox";

import CashcalculatorImage from "../images/cash2.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";
import RestrauntImage from "../images/restraunt.png";

const Projects = () => {
  return (

    <div>

      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Levels" />
        <ProjectBox projectPhoto={CashcalculatorImage} projectName="Cash Calculator" />
        <ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />
        <ProjectBox projectPhoto={BackpackImage} projectName="Backpack" />
        <ProjectBox projectPhoto={RestrauntImage} projectName="Restraunt" />

      </div>
      
    </div>
  );
};

export default Projects;
