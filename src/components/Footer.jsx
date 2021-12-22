import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import "../css/footer.css";
import { useElementContext } from "../context";

const Footer = () => {
  const { testimonial, contact } = useElementContext();

  return (
    <>
      <div className="footer">
        <div className="footer__heading">
          <h3>Lets discuss whats next</h3>
          <div className="footer__heading__text">
            <p>Get in touch</p>
            <MdKeyboardArrowRight className="footer__heading__icon" />
          </div>
        </div>
        <hr className="hr" />
        <div className="footer__main">
          <div className="footer__main-content">
            <h1>Painting service</h1>
            <nav className="footer__main-content__nav">
              <li className="footer__main-content__item">
                <a href="" className="footer__main-content__link">
                  <div className="E">A</div>
                  <div className="E"> : </div>
                  Tempe, AZ 85282{" "}
                </a>
              </li>
              <li
                className="
                footer__main-content__item-email footer__main-content__item
              "
              >
                <a
                  href=""
                  className="
                  footer__main-content__item--email footer__main-content__link
                "
                >
                  <div className="E">E</div>
                  <div className="E"> : </div>
                  puravidapaiting@gmail.com
                </a>
              </li>
              <li
                className="
                footer__main-content__item--phone footer__main-content__item
              "
              >
                <a
                  href=""
                  className="
                  footer__main-content__link--phone footer__main-content__link
                "
                >
                  <div className="P">P</div>
                  <div className="E"> : </div>
                  623-567-9891
                </a>
              </li>
            </nav>
          </div>
          <div className="footer__main-content">
            <h1>Navigation</h1>
            <nav className="footer__main-content__nav">
              <li
                className="footer__main-content__item bullet"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <a className="footer__main-content__link bold">Home</a>
              </li>
              <li
                className="footer__main-content__item bullet"
                onClick={() => {
                  window.scrollTo(0, testimonial.offsetTop - 15);
                }}
              >
                <a className="footer__main-content__link bold">Testimonial</a>
              </li>
              <li
                className="footer__main-content__item bullet"
                onClick={() => {
                  window.scrollTo(0, contact.offsetTop - 15);
                }}
              >
                <a className="footer__main-content__link bold">Contact</a>
              </li>
            </nav>
          </div>
        </div>
        <hr />
        <div className="footer__end">
          <div className="footer__end__copy">&copy; Pura Vida 2021</div>
          <div
            className="footer__end__up"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <RiArrowUpSFill />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
