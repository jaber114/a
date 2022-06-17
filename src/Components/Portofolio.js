
import { Close, MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Facebook, LinkedIn } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Styles/Header.scss";
import "./Styles/Main.scss";
import man from "./assets/jaber.JPG";
import pdf from "./assets/jaber-cv-1.pdf";
import "./Styles/Section.scss";
import man2 from "./assets/jaj.jpg";
// for work section
import react from "./assets/react.jpg";
import ui from "./assets/ui.jpg";
import wd from "./assets/wd.jpg";
import wd2 from "./assets/wd2.jpg";
import wd3 from "./assets/wd3.jpg";
import wd4 from "./assets/wd4.jpg";
import qrcode from "./assets/qr-code-1.png"
import "./Styles/Works.scss";
// for contact
import { ArrowBack } from "@material-ui/icons";
import "./Styles/Contact.scss";
import emailjs from 'emailjs-com';
const Portfolio=()=>
{
    const [active, setActive] = useState(false);
    const showMenu = () => {
      setActive(!active);
    };
    const Linkedin = () => {
        window.open("https://www.linkedin.com/in/jaber-rammal/");
      };
      const facebook = () => {
        window.open("https://www.facebook.com/jaber.rammal/");
      };
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_sjxuu3s', 'template_4idst8i', e.target, 'q-6TiHEQbWzehyhYu')
    
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          e.target.reset();
      };
    return (
        <div>
            {/* Header Section Include Navbar */}
        <div className="header">
          <div className="header__logo">
            <h1 className="h1">Jaber Portfolio</h1>
          </div>
          <nav className={active ? "navbar active" : "navbar"}>
            <ul>
              <div className="closed">
                <Close className="close" onClick={showMenu} />
              </div>
              <li>
               <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
              
            </ul>
          </nav>
          <div className="changer">
            <MenuOutlined className="menu" onClick={showMenu} />
          </div>
        </div>
        {/* Main Section */}
        <div className="main">
        <div className="main__container">
          <div className="main__content">
            <div id="home" className="text">
              <p>Hey There !</p>
              <h1>I am Jaber Rammal</h1>
              <p>Practical Software Engineer</p>
             
              <div className="icons">
                <Link to="" onClick={Linkedin} target="_blank">
                  <LinkedIn className="icon" />
                </Link>
             
                <Link to="" onClick={facebook} target="_blank">
                  <Facebook className="icon" />
                </Link>
              </div>
              <div className="buttons">
                 <p>Scan the Qr Code for See my Cv</p>
                 <img src={qrcode} width="40%" height="auto"></img>
               
              </div>
            </div>
          </div>
          <div className="main__img">
            <img width="573px" height="465px" src={man} alt="" />
          </div>
        </div>
      </div>
      {/* About me Section */}
      <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img width="auto" height="auto" src={man2} alt="" />
        </div>
        <div id="about" className="section__content">
          <h1>Who is Jaber</h1>
          <p>Practical Software Engineer</p>
          <p>Have an excellent interpersonal skills</p>
          <p>ability to handle several tasks.</p>
          <p>Self Taught Person</p>
          <p>Frontend Stack:Angular,Css,Html,Javascript,Json,Ajax,Jquery</p>
          <p>BackEnd:Php,Node js</p>
          <p>DataBases:Mysql,FireBase,MongoDb</p>
          <p>Monitor Tools:Grafana</p>
          <p>Basic Knowledge:React,Docker,Jenkins</p>
        </div>
      </div>
    </div>
    {/* Projects Section */}
    <div id="projects" className="works">
      <div className="work__section">
        <div className="cards"> 
          <img src={react} alt="" />
         
          <button>
          <h4>Italy Project</h4>
          <a href='https://github.com/jaber114/italy-project' alt='Broken Link'>
          Github Site
          </a>
         
          </button>
        
        </div>
        <div className="cards"> 
          <img src={ui} alt="" />
          <button>
          <h4>Mine Swepper</h4>
          <a href='https://github.com/jaber114/mineswepper' alt='Broken Link'>
          Github Site
          </a>
          </button>
        </div>
        <div className="cards">
          <img src={wd} alt="" />
          
          <button>
          <h4>Who Want to be a Millionaire</h4>
          <a href='https://github.com/jaber114/who-want-to-be-a-millionaire' alt='Broken Link'>
          Github Site
          </a>
          </button>
        </div>
        <div className="cards"> 
          <img src={wd2} alt="" />
          <button>
            <h4>Old Scroll</h4>
          <a href='https://github.com/jaber114/Old-Scroll' alt='Broken Link'>
          Github Site
          </a>
          </button>
        </div>
        <div className="cards">
          <img src={wd3} alt="" />
          <button  >
          <h4>Books</h4>
          <a href='https://github.com/jaber114/Books' alt='Broken Link'>
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
    {/* Contact Section */}
    <div id="contact" className="contact">
      <Link to="/">
        <ArrowBack className="arrow" />
      </Link>
      <div className="inputs">
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" />
          <input type="email" name="to_name" placeholder="Email" />
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
      </div>
      );
    
}
export default Portfolio;