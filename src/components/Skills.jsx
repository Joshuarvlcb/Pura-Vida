import React from "react";
import Picture from "../assests/skills-pic.png";
import { BsCalendar as Calender } from "react-icons/bs";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import "../css/skills.css";
const Skills = () => {
  return (
    <>
      <div class="skills">
        <div className="skills__picture">
          <img src={Picture} alt="" />
        </div>
        <div className="skills__content">
          <h3 className="skills__content__title">Welcome to Pura Vida</h3>
          <div className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum
            officia odit laboriosam, earum ipsum dignissimos, delectus
            perspiciatis eaque quia temporibus quaerat! Magnam facilis sint
            modi, error assumenda aperiam hic.
          </div>
          <div className="skills__description">
            <div className="skills__description__row">
              <div className="skills__description__item">
                <Calender className="skills__description__icon" />
                <p>Flexible sheduling options</p>
              </div>
              <div className="skills__description__item">
                <IoNewspaperOutline className="skills__description__icon" />
                <p>PDCA Certified member</p>
              </div>
            </div>
            <div className="skills__description__row">
              <div className="skills__description__item">
                <HiOutlineColorSwatch className="skills__description__icon" />
                <p>Free color consultation</p>
              </div>
              <div className="skills__description__item">
                <FaHandHoldingUsd className="skills__description__icon" />
                <p>Inexpensive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
