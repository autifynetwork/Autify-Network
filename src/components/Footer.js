import React from "react";
import "./Footer.css";
import logo from "../assets/Content Pics/Logo/Logo 2.png";
import { db } from "../firebase";
import { useState } from "react";
import tele from "../assets/pngegg.png";

import img1 from "../assets/Content Pics/AUTY Token/1.8.png";
import img2 from "../assets/Content Pics/AUTY Token/1.9.png";
import img3 from "../assets/Content Pics/AUTY Token/1.91.png";
import img4 from "../assets/Content Pics/AUTY Token/1.812.png";

import near from "../assets/Content Pics/Partners/5.png";
import gs1 from "../assets/Content Pics/Partners/gs1-logo.png";
import comp from "../assets/Content Pics/Partners/7.png";
import aws from "../assets/Content Pics/Partners/2.png";
import dfinity from "../assets/Content Pics/Partners/Dfinity.png";
import ascent from "../assets/Content Pics/Partners/Ascent-Advisors.png";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState("");

  // function sendEmail(e) {
  //     e.preventDefault();
  //     emailjs.sendForm('service_xn2suce', 'template_khb69db', e.target, 'user_Rrrqmo6h0kHJPvhS4zkK0')
  //     .then((res) => {
  //     console.log(res.text);
  //     }, (error) => {
  //     console.log(error.text);
  //     });
  //     }
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        subject: subject,
      })
      .then(() => {
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  const handleSubscribe = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        subscribe: subscribe,
      })
      .then(() => {
        alert("Thannks for subscribing!");
      })
      .catch((error) => {
        alert(error.message);
      });

    setSubscribe("");
  };

  return (
    <>
      <section className="container mx-auto">
        <div className="partners_autify" style={{ color: "white" }}>
          <h1
            className="my-3 text-center"
            id="h22"
            style={{ marginTop: "2%", color: "white" }}
          >
            Partners
          </h1>
          <div
            className="partners_grid mx-auto mb-lg-5 pb-lg-5 flex-row flex-nowrap overflow-auto x-scroll-disabled row-xs-12"
            // style={{ backgroundColor: "white" }}
          >
            <div className="mt-5 mx-auto">
              <img alt="img" src={near} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <img alt="img" src={aws} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto partner_img_container">
              <img
                alt="img"
                src={gs1}
                className="partner_img mr-xs-4"
                style={{ height: "100px", width: "120px" }}
              />
            </div>
            <div className="mt-5 mx-auto">
              <img alt="img" src={comp} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <img alt="img" src={dfinity} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <img alt="img" src={ascent} className="partner_img" />
            </div>
          </div>
        </div>
        <div className="auty_token" style={{ color: "white" }}>
          <h1
            className="my-3 text-center"
            id="h22"
            style={{ marginTop: "2%", color: "white" }}
          >
            AUTY Token
          </h1>
          <div className="auty_token_grid mx-auto mb-lg-5 pb-lg-5 flex-row flex-nowrap overflow-auto x-scroll-disabled row-xs-12">
            <div className="auty_item text-center col my-3 mx-auto">
              <img alt="img" src={img1} className="auty_img" id="neu_img"></img>
              <h2 id="auty_title">Fees</h2>
              <p id="auty_description">
                Every on-chain transaction takes fees.
              </p>
            </div>
            <div className="auty_item text-center col my-3 mx-auto">
              <img alt="img" src={img2} className="auty_img" id="neu_img"></img>
              <h2 id="auty_title">Governance</h2>
              <p id="auty_description">
                AUTY Token is used for facilitating governance activities such
                as Voting.
              </p>
            </div>
            <div className="auty_item text-center col my-3 mx-auto">
              <img alt="img" src={img3} className="auty_img" id="neu_img"></img>
              <h2 id="auty_title">Staking</h2>
              <p id="auty_description">
                AUTY token holders can stake AUTY tokens on DApp as well as
                network. By doing so, the staker can earn AUTY tokens.
              </p>
            </div>
            <div className="auty_item text-center col my-3 mx-auto">
              <img alt="img" src={img4} className="auty_img" id="neu_img"></img>
              <h2 id="auty_title">Reward</h2>
              <p id="auty_description">
                Brands will use AUTY Tokens to process rewards to the end
                consumers.
              </p>
            </div>
          </div>
        </div>
        {/*<div className="contact_form container" id="contact">
           <div
            className="row"
            style={{ marginTop: "15%", marginBottom: "20%" }}
          >
            <div className="col-lg mr-3">
              <h2 id="h2">
                Contact Us
                <span className="my-5 mx-auto " id="p1">
                  Get In Touch to Know More
                  <br /> PR: pr@autify.network
                  <br />
                  Investors: invest@autify.network
                  <br />
                  Influencer : influencer@autify.network
                  <br />
                  Get Hired : hr@autify.network <br />
                </span>
              </h2>

              <div className="row mb-1">
                <img
                  src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/illustration-hero-new.png"
                  className="img-fluid mx-auto"
                  alt="alt"
                  style={{ width: "400px" }}
                />
              </div>
            </div>
            <div
              className="col-md-12 col-lg-5 ml-lg-5 mt-5 mt-md-0 mr-md-0 mr-2 ml-2"
              id="hh"
            >
              <div className="contact-form mx-auto">
                <h1 id="h2" className="title mt-5">
                  Your Details
                </h1>
                <h4 id="h3" className="subtitle">
                  We are here to assist you.
                </h4>
                <form
                  method="post"
                  style={{ width: "75%" }}
                  className="mx-auto mb-1"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group mx-auto">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mx-auto">
                    <input
                      type="text"
                      name="user__email"
                      className="form-control"
                      placeholder="Your Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="form-group mx-auto">
                    <textarea
                      name="txtMsg"
                      className="form-control"
                      placeholder="Your Message *"
                      value={message}
                      style={{ width: "100%", height: "150px" }}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group mx-auto">
                    <input
                      type="submit"
                      name="btnSubmit"
                      className="button_info "
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div> 
        </div> */}
        {/* <div className="stay_in_touch container ml-auto mr-auto my-5 mx-xs-5" id="stay">
                    <div className="contact_description">
                        <h2 id="h2">Our Newsletter</h2>
                        <p>Drop your email below and our team will get in touch with you</p>

                    </div>
                    <div style={{display:"block"}}>
                        <form className="form" onSubmit={handleSubscribe}>
                            <input type="text" placeholder="Enter email" className="input"/>
                                <button type="submit" className="btn-subscribe">Submit</button>
                            
                        </form>
                    </div>
                </div> */}
      </section>
      <div className="footer_m" id="footer_m">
        <a href=" ">
          <img src={logo} alt="alt-text"></img>
        </a>

        <div className="row text-center">
          <div className="col">
            <a href=" " className="button11 current">
              Privacy Policy
            </a>
          </div>
          <div className="col" style={{ placeItems: "center" }}>
            <a href=" " className="button11 current">
              Terms and Conditions
            </a>
          </div>
          <div className="col" style={{ placeItems: "center" }}>
            <a href="/contact" className="button11 current">
              Contact Us
            </a>
          </div>
          {/* <div className="col">
            <a href=" " className="button11">
              Sitemap
            </a>
          </div> */}
        </div>
        <div className="landing__foot__icons" style={{ display: "block" }}>
          <a
            href="https://twitter.com/autifynetwork"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
              alt="twitter"
              id="icons"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/company/autify-network/"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
              alt="linkedin"
              id="icons"
            ></img>
          </a>
          <a
            href="https://www.facebook.com/autifynetwork"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg=="
              alt="facebook"
              is="icons"
            ></img>
          </a>
          <a
            href="https://t.me/autifynetwork"
            target="_blank"
            rel="noreferrer"
            className="mx-1 "
          >
            <img
              src={tele}
              style={{ width: "32px" }}
              alt="telegram"
              className="img-fluid"
              id="icons"
            ></img>
          </a>
        </div>
        <br />
        <div
          className="row mx-auto .d-flex"
          style={{ placeItems: "center", marginRight: "40%" }}
        >
          <a href="#0" className="button11 current">
            <i className="mdi mdi-copyright"></i>2022 Autify Network. All Rights
            Reserved.
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
