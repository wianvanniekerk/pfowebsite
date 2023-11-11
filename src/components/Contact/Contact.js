import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const [NAME, setName] = useState();
  const [EMAIL, setEmail] = useState();
  const [COMPANY, setCompany] = useState();
  const [MESSAGE, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bm7cbmk",
        "template_hy1e3on",
        form.current,
        "BUKwATi6iL79yutzV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="NAME"
                      name="NAME"
                      value={NAME}
                    />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="EMAIL"
                      name="EMAIL"
                      value={EMAIL}
                    />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="COMPANY"
                      name="COMPANY"
                      value={COMPANY}
                    />
                  </div>
                  <div class="app-form-group message">
                    <input
                      class="app-form-control"
                      placeholder="MESSAGE"
                      name="MESSAGE"
                      value={MESSAGE}
                    />
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button" value="Send">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Contact;
