import React from "react";
import "../css/description.css";
const Description = () => {
  return (
    <>
      <div className="description">
        <div className="description__content">
          <div className="description__content__svg"></div>
          <div className="description__content__header">Commercial</div>
          <div className="description__content__para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae non
            ab delectus explicabo cumque, ut neque nihil unde obcaecati maxime?
          </div>
        </div>

        <div className="description__content">
          <div className="description__content__svg description__content__svg--build-2"></div>
          <div className="description__content__header">Residential</div>
          <div className="description__content__para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae non
            ab delectus explicabo cumque, ut neque nihil unde obcaecati maxime?
          </div>
        </div>

        <div className="description__content">
          <div className="description__content__svg description__content__svg--build-3"></div>
          <div className="description__content__header">Commercial</div>
          <div className="description__content__para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae non
            ab delectus explicabo cumque, ut neque nihil unde obcaecati maxime?
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
