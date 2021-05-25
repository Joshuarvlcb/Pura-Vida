import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import "../css/footer.css";
const Footer = () => {
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
                  Lorem, ipsum dolor.
                </a>
              </li>
              <li className="footer__main-content__item">
                <a href="" className="footer__main-content__link">
                  Lorem, ipsum dolor.
                </a>
              </li>
              <li className="footer__main-content__item">
                <a href="" className="footer__main-content__link">
                  Lorem, ipsum dolor.
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
                  <div className="E">E: </div>
                  Lorem, ipsum dolor.
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
                  <div className="P">P: </div>
                  Lorem, ipsum dolor.
                </a>
              </li>
            </nav>
          </div>
          <div className="footer__main-content">
            <h1>Navigation</h1>
            <nav className="footer__main-content__nav">
              <li className="footer__main-content__item">
                <a href="" className="footer__main-content__link">
                  Lorem, ipsum dolor.
                </a>
              </li>
              <li className="footer__main-content__item">
                <a href="" className="footer__main-content__link">
                  Lorem, ipsum dolor.
                </a>
              </li>
              <li className="footer__main-content__item">
                <a href="" className="footer__main-content__link">
                  Lorem, ipsum dolor.
                </a>
              </li>
              <li
                className="
                footer__main-content__item--email footer__main-content__item
              "
              >
                <a
                  href=""
                  className="
                  footer__main-content__link--email footer__main-content__link
                "
                >
                  Lorem, ipsum dolor.
                </a>
              </li>
              <li
                className="
                footer__main-content__link--phone footer__main-content__item
              "
              >
                <a
                  href=""
                  className="
                  footer__main-content__link-email footer__main-content__link
                "
                >
                  Lorem, ipsum dolor.
                </a>
              </li>
            </nav>
          </div>
        </div>
        <hr />
        <div className="footer__end">
          <div className="footer__end__copy">
            &copy; Pura Vida 2021 made with 💖 by Joshua Ruvalcaba
          </div>
          <div className="footer__end__up">
            <RiArrowUpSFill />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
