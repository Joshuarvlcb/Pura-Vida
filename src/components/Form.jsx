import "../css/form.css";
import { useRef } from "react";
import { useElementContext } from "../context";
import { useEffect } from "react";
const Form = () => {
  let firstName = useRef();
  let email = useRef();
  let phone = useRef();
  let zip = useRef();
  let msg = useRef();
  const { getElement } = useElementContext();
  let contactForm = useRef();
  useEffect(() => {
    getElement("contact", contactForm);
  }, [contactForm]);
  return (
    <>
      <div ref={(ref) => (contactForm = ref)} className="form">
        <div className="form__picture"></div>
        <div className="form__content">
          <h2>Start with a free quote</h2>
          <div class="form__content-area">
            <div className="row">
              <input
                ref={(ref) => (firstName = ref)}
                type="text"
                class="form__content-area__input"
                placeholder="Name"
              />
              <input
                ref={(ref) => (email = ref)}
                type="text"
                className="form__content-area__input"
                placeholder="Email"
              />
            </div>
            <div class="row">
              <input
                ref={(ref) => (phone = ref)}
                type="text"
                className="form__content-area__input"
                placeholder="Phone Number"
              />
              <input
                ref={(ref) => (zip = ref)}
                type="text"
                className="form__content-area__input"
                placeholder="Post Code"
              />
            </div>

            <textarea
              class="form__content-area__text"
              name=""
              id=""
              cols="20"
              rows="8"
              placeholder="Message"
              ref={(ref) => (msg = ref)}
            ></textarea>

            <button
              className="form__content-area__btn"
              onClick={(e) => {
                firstName.value = "";
                email.value = "";
                zip.value = "";
                phone.value = "";
                msg.value = "";
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
