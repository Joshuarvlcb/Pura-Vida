import "../css/testimonial.css";
const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <div className="testimonial-con">
          <p className="testimonial-con__para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            omnis ullam atque obcaecati, repellendus quaerat recusandae nam ex
            quisquam eaque consectetur fugit! Labore esse quis illum architecto.
            Neque sint perferendis quo non temporibus veniam. Dolor, incidunt
            maxime et quidem natus consectetur quasi accusamus voluptatibus,
            magnam at necessitatibus quo? Illum, ab.
          </p>

          <div className="testimonial-con__reviewer">
            <div className="testimonial-con__review-line"></div>
            Saul Ruvalcaba
          </div>
          <div className="testimonial-con__line"></div>
        </div>

        <div className="toggle toggle--testimonial">
          <span className="toggle__item toggle__item--testimonial toggle--active"></span>
          <span className="toggle__item toggle__item--testimonial"></span>
          <span className="toggle__item toggle__item--testimonial"></span>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
