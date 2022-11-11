import React, { useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import imageOverlay from "../img/earth.jpg";

const Contact = () => {

  const [captchaValid, setCaptchaValid] = useState(null)

  const captcha = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert("Please complete the captcha!");
      return false;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const text = document.getElementById("text").value;

    const msg = {
      name, email, subject, text
    }

    try {
      const response = await axios.post(
        'https://portfolio-backend-production-2fb5.up.railway.app//send-email',
        msg
      );
      console.log(response)
      alert("Message sended!");
    } catch (error) {
      console.log(error)
      alert("Something went wrong, please send me an email to: juan.funes.96@outlook.com");
    }
  }

  const onChange = async () => {
    const captchaResp = await captcha.current.getValue();
    if (captchaResp) {
      setCaptchaValid(captchaResp);
    };
  }

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form className="contactForm" id="contact-form" onSubmit={handleSubmit}>
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                required={true}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                required={true}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                                required={true}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                id="text"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                                required={true}
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <ReCAPTCHA
                              ref={captcha}
                              sitekey="6Le1IkQiAAAAABCRd9LIbAY2LA-rWf7f3vEjRHHJ"
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd like to hear from
                        you.
                        <br />
                        Simply fill the form and send me an email.
                      </p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/jignaf84"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img src="https://res.cloudinary.com/dxg8ulxz5/image/upload/v1662671444/twitter-6_cz0rfw.svg" alt="twitter" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/JuanFunes9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img src="https://res.cloudinary.com/dxg8ulxz5/image/upload/v1662671444/github-icon-1_iagzwl.svg" alt="github" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/juanfunes-/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img src="https://res.cloudinary.com/dxg8ulxz5/image/upload/v1662671444/linkedin-icon_sogzdj.svg" alt="LinkedIn" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://wa.me/5491159794241"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img className="wsp" src="https://res.cloudinary.com/dxg8ulxz5/image/upload/v1662671781/whatsapp-3_ijjsdw.svg" alt="Whatsapp" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}


export default Contact;
