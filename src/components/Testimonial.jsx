import "../css/testimonial.css";
import { useState, useEffect, useRef } from "react";
import { useElementContext } from "../context";
const data = [
  {
    name: "Saul Ruvalcaba",
    msg: `Exceptional Service, Excellent work!!I am extremely please with the interior paint job that was done in my home.  The painters were professionals that made my family room beautiful again. I am so happy with Pura Vida that I've hired them to paint the exterior of my home in a few weeks.  If you're looking for a good reliable , professional , easy to do business go with Pura Vida`,
  },
  {
    name: "Eduardo Castro",
    msg: `Pura Vida stepped up to do a great job and offered a fair price. I would definitely recommend them for your next painting job. Prompt, courteous service and they did a great job from ceiling to baseboards!`,
  },
  {
    name: "Miguel Davies",
    msg: `Pura Vida is best company i have worked with very friendly, cooperative and very detail oriented this is second time i have used them they are one of the best.`,
  },
];
const Testimonial = () => {
  const [testimonialId, setTestimonialId] = useState(0);
  let testimonial = useRef();
  const { getElement, testimonial: t } = useElementContext();
  useEffect(() => {
    getElement("testimonial", testimonial);
  }, [testimonial]);

  return (
    <>
      <div
        ref={(ref) => (testimonial = ref)}
        className="testimonial"
        id="testimonial"
      >
        <div className="testimonial-con">
          <p className="testimonial-con__para">{data[testimonialId].msg}</p>

          <div className="testimonial-con__reviewer">
            <div className="testimonial-con__review-line"></div>
            {data[testimonialId].name}
          </div>
          <div className="testimonial-con__line"></div>
        </div>

        <div className="toggle toggle--testimonial">
          <span
            onClick={() => setTestimonialId(0)}
            className={`toggle__item toggle__item--testimonial ${
              testimonialId == 0 ? "toggle--active" : ""
            }`}
          ></span>
          <span
            onClick={() => setTestimonialId(1)}
            className={`toggle__item toggle__item--testimonial ${
              testimonialId == 1 ? "toggle--active" : ""
            }`}
          ></span>
          <span
            onClick={() => setTestimonialId(2)}
            className={`toggle__item toggle__item--testimonial ${
              testimonialId == 2 ? "toggle--active" : ""
            }`}
          ></span>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
