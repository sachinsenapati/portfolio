import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Socialmedia = () => {
  return (
    <div className="app__social">
      <div className="app__socialmedia">
        <a
          href="https://github.com/sachinsenapati"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="app__socialmedia">
        <a
          href="https://www.linkedin.com/in/sachin-kumar-senapati/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="app__socialmedia">
        <a
          href="https://instagram.com/_sachinsenapati?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Socialmedia;
