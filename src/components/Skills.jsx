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
            As a leading Arizona industrial painting contractor, Pura Vida has
            helped thousands of companies protect their assets and maximize
            their facility investment. On every project we have undertaken
            during our 45 years in business, we have made it our goal to exceed
            customers’ expectations and provide a disruption-free experience
            from start to finish. Leave the painting to us and we will guarantee
            a stress-free and professional experience so you can concentrate on
            core business needs and serving customers.
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
