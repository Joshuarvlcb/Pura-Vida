import React from "react";
import { MdPlayArrow } from "react-icons/md";
import "../css/landing.css";
function landing() {
  return (
    <div>
      <div className="welcome">
        <div className="intro">
          <h3 className="intro__text">All the painting jobs you need</h3>

          <div className="intro__video">
            <p className="intro__video__text">intro video</p>

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

          <div className="toggle toggle--welcome">
            <span className="toggle__item toggle--active"></span>
            <span className="toggle__item"></span>
            <span className="toggle__item"></span>
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

export default landing;
