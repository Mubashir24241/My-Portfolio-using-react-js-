import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LevelsDesc:
      "This website is a for a local gym to help with their sales.This helped me understand React better and more clearly. I also learned how to host on vercel.",
    LevelsGithub: "https://github.com/Mubashir24241/gym-website",
    LevelsWebsite: "https://gym-website792.netlify.app/",

    Cashcalculator:
      "This web app  is for helping you to calculate the differnt cash.The project helped me with understanding the working of API.I also learned new CSS properties and tricks.",
      CashcalculatorWebsite: "https://cashcalculator22.netlify.app/",
      CashcalculatorGithub: "https://github.com/Mubashir24241/cash-calculator22",

    ColourPaletteDesc:
      "This website helps you generate random colours that you can use as a palette.The project helped me understand Javascript more deeply using advance techniques",
    ColourPaletteGithub: "https://github.com/Mubashir24241",
    ColourPaletteWebsite: "https://colourpalettegen.netlify.app",

    BackpackDesc:
      "This webpage is was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
    BackpackGithub: "https://github.com/Mubashir24241/",
    BackpackWebsite: "https://landing-page-react-sage.vercel.app/",

    Restraunt:
    "This is a front-end project using html css and javascript, a complete restaurent website where users can find and order their meel according to their mood",
    RestrauntWebsite: "https://restraunt792.netlify.app/",
    RestrauntGithub: "https://github.com/Mubashir24241/Restarunt-Website--js-",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
