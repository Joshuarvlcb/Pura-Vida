import "../css/form.css";
const Form = () => {
  return (
    <>
      <div className="form">
        <div className="form__picture"></div>
        <div className="form__content">
          <h2>Start with a free quote</h2>

          <div class="form__content-area">
            <div className="row">
              <input
                type="text"
                class="form__content-area__input"
                placeholder="Name"
              />
              <input
                type="text"
                className="form__content-area__input"
                placeholder="Email"
              />
            </div>
            <div class="row">
              <input
                type="text"
                className="form__content-area__input"
                placeholder="Phone Number"
              />
              <input
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
            ></textarea>

            <button className="form__content-area__btn">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
