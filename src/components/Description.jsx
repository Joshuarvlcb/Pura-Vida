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
            Our commercial painting services (interior and exterior) are a long
            lasting and durable way to protect your building’s drywall and other
            surfaces, and a great way to touch up its appearance and keep it
            looking new and impressive.
          </div>
        </div>
        <div className="description__content">
          <div className="description__content__svg description__content__svg--build-3"></div>
          <div className="description__content__header">Commercial</div>
          <div className="description__content__para">
            When it comes to high quality commercial painting, we take the time
            to do things the right way the first time. It’s important to us that
            your new paint job will last a very long time and constitute a great
            investment for your building.
          </div>
        </div>
        <div className="description__content">
          <div className="description__content__svg description__content__svg--build-2"></div>
          <div className="description__content__header">Residential</div>
          <div className="description__content__para">
            Our high quality residential painting services aren’t just a fast
            way to touch up your home’s appearance; they’re a long lasting,
            durable solution for protecting your home’s beauty and keeping it’s
            drywall and plaster in the best repair.
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
