import React from "react";
import "./footer.css";
import footlogo from "../Images/whitehat-jr-logo.jpg";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="mainfooter">
        <div className="foot-img">
          <img className="foot-logo" src={footlogo} alt="" />
        </div>

        <div className="foot-head">
          <div>
            <p className="ptext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates unde eius ipsa alias ut enim illum, voluptatem
              molestiae, deleniti sequi quos sunt quod corrupti ducimus dolores
              molestias, recusandae quis libero! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quos assumenda nobis iusto voluptate
              nihil inventore nulla dignissimos. Quas expedita voluptates eum
              exercitationem illo a, ea obcaecati rerum minima excepturi atque.
            </p>
            <div className="foot-icon">
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <AiFillPlayCircle />
              </a>
              <a href="">
                <TiSocialLinkedinCircular />
              </a>
            </div>
          </div>

          <div className="col1">
            <ul>
              <h6>Links</h6>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <h6>More</h6>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>hello </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis labore culpa soluta? Tenetur et dicta impedit
            necessitatibus repellendus numquam, porro fuga magni nesciunt
            veritatis adipisci velit? Error, sapiente? Ex, ad.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
