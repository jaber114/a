import React from "react";
import "./Styles/Section.scss";
import man2 from "./assets/jaj.jpg";
const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img width="auto" height="auto" src={man2} alt="" />
        </div>
        <div className="section__content">
          <h1>Who is Jaber</h1>
          <p>Practical Software Engineer</p>
          <p>Have an excellent interpersonal skills</p>
          <p>ability to handle several tasks.</p>
          <p>Self Taught Person</p>
          <p>Frontend Stack:Angular,Css,Html,Javascript,Json,Ajax,Jquery</p>
          <p>BackEnd:Php,Node js</p>
          <p>DataBases:Mysql,FireBase,MongoDb</p>
        </div>
      </div>
    </div>
  );
};
export default Section;
