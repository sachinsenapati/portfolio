import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Socialmedia = () => {
  return (
    <div className="app__social">
      <div className="app__socialmedia">
        <a
          href="https://github.com/rishu-singh9695"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="app__socialmedia">
        <a
          href="https://www.linkedin.com/in/anand-pratap-singh-5223291a6/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="app__socialmedia">
        <a
          href="https://www.instagram.com/its_rishu.singh/?next=%2F"
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
