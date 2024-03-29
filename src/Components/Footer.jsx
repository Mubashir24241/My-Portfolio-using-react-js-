import React from "react";
import {FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved | <b>MUBASHIR</b></h4>
      <div className="footerLinks">

        <a href="https://github.com/Mubashir24241" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.instagram.com/i_m_meer_mubashir/" target="_blank">
          <FaInstagram />
        </a>

        
         <a href="https://www.linkedin.com/in/mubashirahmad223/" target="_blank"> 
         <FaLinkedin />
         </a>

        <a href="mailTo:mbshrmr@gmail.com" target="_blank">
          <GrMail />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
