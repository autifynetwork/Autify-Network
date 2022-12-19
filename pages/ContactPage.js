import Image from "next/image";
import React, { useState } from "react";
import illustration from "../public/assets/illustration-hero-new-contactPage.png";

const ContactPage = () => {
  return (
    <>
      <div className="contact_form container" id="contact">
        <div className="row">
          <div className="col-lg mr-3">
            <h2 id="h2" className="text-center mb-4">
              Contact Us
              <span className="mx-auto text-center mt-4" id="p1">
                <div className="mb-4 mb-md-0">
                  <span>Keen to get more coverage? </span>{" "}
                  <span>email us: pr@autify.network</span>
                  <br />
                </div>
                <div className="mb-4 mb-md-0">
                  <span>Want to be part of our team? </span>{" "}
                  <span>email us: hr@autify.network</span>
                  <br />
                </div>
                <div className="mb-4 mb-md-0">
                  <span>Want to be part of Autify fundraising round? </span>
                  <span>email us: invest@autify.network</span>
                  <br />
                </div>{" "}
                <div className="mb-4 mb-md-0">
                  <span>Want to be an integral part of the Web3 era? </span>
                  <span>email us: hello@autify.network</span>
                  <br />
                </div>{" "}
                <div className="mb-4 mb-md-0">
                  <span>Can help us on getting more customers? </span>{" "}
                  <span>email us: marketing@autify.network</span>
                </div>
              </span>
            </h2>
            <div className="row mb-1">
              <Image
                // src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/illustration-hero-new.png"
                src={illustration}
                className="img-fluid mx-auto"
                alt="alt"
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
