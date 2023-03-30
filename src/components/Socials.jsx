import React from "react";
import { Link } from "react-router-dom";

export const Socials = () => {
  return (
    <div className="d-flex social-links">
      <div className="vertical-text">My Socials</div>
      <ul>
        <li>
          <a href="https://github.com/bizzle-sys">
            {" "}
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
