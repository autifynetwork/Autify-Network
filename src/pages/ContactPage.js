import React, { useState } from "react";
import { db } from "../firebase";
import "../components/Footer.css";

const ContactPage = () => {
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
      <div className="contact_form container" id="contact">
        <div className="row">
          <div className="col-lg mr-3">
            <h2 id="h2" className="text-center mb-4">
              Contact Us
              <span className="mx-auto text-center mt-4" id="p1">
                Keen to get more coverage? Contact pr@autify.network
                <br />
                Want to be part of our team? email us hr@autify.network
                <br />
                Determined to maximise your reach influencer@autify.network
                <br /> Want to be part of Autify fundraising round?
                invest@autify.network
                <br /> Want to be an integral part of the Web 3.0 era? Join
                hands with Autify: hello@autify.network
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
          {/* <div
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
          </div> */}
        </div>
      </div>
      {/* <div
        className="stay_in_touch container ml-auto mr-auto my-5 mx-xs-5"
        id="stay"
      >
        <div className="contact_description">
          <h2 id="h2">Our Newsletter</h2>
          <p>Drop your email below and our team will get in touch with you</p>
        </div>
        <div style={{ display: "block" }}>
          <form className="form" onSubmit={handleSubscribe}>
            <input type="text" placeholder="Enter email" className="input" />
            <button type="submit" className="btn-subscribe">
              Submit
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default ContactPage;
