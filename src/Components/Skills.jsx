import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaBootstrap,
  
} from "react-icons/fa";
import { DiJavascript1, DiMysql, DiJava } from "react-icons/di";
import { SiTailwindcss, SiAndroid, SiPython  } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Tailwind: <SiTailwindcss />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    MySQL: <DiMysql />,
    Java: <DiJava />,
    PHP: <FaPhp />,
    AndroidDevelopment: <SiAndroid />,
    Bootstrap: <FaBootstrap />,
    Python: <SiPython />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
