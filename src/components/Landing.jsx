import React, { useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import "../css/landing.css";
import { useElementContext } from "../context";

function Landing() {
  const { contact } = useElementContext();
  return (
    <div>
      <div className="welcome">
        <div className="intro">
          <h3 className="intro__text">All the painting jobs you need</h3>

          <div
            className="intro__video"
            onClick={() => {
              window.scrollTo(0, contact.offsetTop - 15);
            }}
          >
            <p className="intro__video__text">free consult!</p>

            <div className="intro__video__icon-con">
              <MdPlayArrow />
            </div>
          </div>

          <div className={`intro__picture`}>
            <>
              {window.innerWidth <= 900 ? (
                <div className="picture-con__quote">
                  <p>Get free quote</p>
                </div>
              ) : null}
            </>
          </div>
        </div>
        <div className="picture-con">
          <div className="picture-con__picture" alt=""></div>
          <div className="picture-con__quote">
            <p>Get free quote</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
