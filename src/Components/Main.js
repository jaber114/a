import { Facebook, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Main.scss";
import man from "./assets/jaber.JPG";
import pdf from "./assets/QA.pdf";
const Main = () => {
  const Linkedin = () => {
    window.open("https://www.linkedin.com/in/jaber-rammal/");
  };
  const facebook = () => {
    window.open("https://www.facebook.com/jaber.rammal/");
  };
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Jaber Rammal</h1>
            <p>Junior Web Developer</p>
            <div className="icons">
              <Link to="" onClick={Linkedin} target="_blank">
                <LinkedIn className="icon" />
              </Link>
           
              <Link to="" onClick={facebook} target="_blank">
                <Facebook className="icon" />
              </Link>
            </div>
            <div className="buttons">
              <Link to={pdf} target="_blank" download>
                <button>DownLoad Cv</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="main__img">
          <img width="573px" height="465px" src={man} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Main;
