import React from "react";
import react from "./assets/react.jpg";
import ui from "./assets/ui.jpg";
import wd from "./assets/wd.jpg";
import wd2 from "./assets/wd2.jpg";
import wd3 from "./assets/wd3.jpg";
import wd4 from "./assets/wd4.jpg";
import "./Styles/Works.scss";
const Works = () => {
  // const italy=()=>
  // {
  //   window.open("https://github.com/jaber114/italy-project");
  // }
  return (
    <div className="works">
      <div className="work__section">
        <div className="cards"> 
          <img src={react} alt="" />
          <button>
          <a href='https://github.com/jaber114/italy-project' alt='Broken Link'>
          Github Site
          </a>
          </button>
          
        </div>
        <div className="cards"> 
          <img src={ui} alt="" />
          <button>
          <a href='https://github.com/jaber114/italy-project' alt='Broken Link'>
          Github Site
          </a>
          </button>
        </div>
        <div className="cards">
          <img src={wd} alt="" />
          <button>
          <a href='https://github.com/jaber114/italy-project' alt='Broken Link'>
          Github Site
          </a>
          </button>
        </div>
        <div className="cards"> 
          <img src={wd2} alt="" />
          <button>
          <a href='https://github.com/jaber114/italy-project' alt='Broken Link'>
          Github Site
          </a>
          </button>
        </div>
        <div className="cards">
          <img src={wd3} alt="" />
          <button  >
          <a href='https://github.com/jaber114/italy-project' alt='Broken Link'>
          Github Site
          </a>
            </button>
        </div>
        <div className="cards">
          <img src={wd4} alt="" />
          <button>
          <a href='https://github.com/jaber114/italy-project' alt='Broken Link'>
          Github Site
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Works;
