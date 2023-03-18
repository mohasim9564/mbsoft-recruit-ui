import { React } from "react";
import contact from "../../images/contact.jpg";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";
import { SendEmail } from "../shared/sendemail/sendemail";
import axios from "axios";

export const Contact = () => {
  return (
    <div>
      <div className="container mb-5" style={{ marginTop: "4rem" }}>
        <div className="gContainerFluid image">
          <img src={contact} style={{ width: "100%" }} />
          <div className="gCentered">
            <h2 style={{ fontSize: "5rem" }}>Contact us</h2>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6">
            <h1>DROP AN ENQUIRY</h1>
          </div>
          <div className="col-md-6">
            <h1 className="dispaly-4">FIND US ON </h1>
          </div>
        </div>
        <div className="row mx-4">
          <div className="col-md-6">
            <div className="row">
              <SendEmail></SendEmail>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Address</h5>
            <svg width="80%" height="20">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
            <p>
              {" "}
              Gottigere post, C K palya Road, Bannerghatta Main Rd,
              <br />
              Hommadevanahalli, Bengaluru,
              <br />
              Karnataka - 560083
            </p>
            <br />
            <h5>Online Support</h5>
            <svg width="80%" height="20">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
            <p>WhatsApp @8050369047</p>
            <br />
            <h5>Office Hours</h5>
            <svg width="80%" height="20">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
            <p> 9:00 AM - 6:00 PM (Mon to Sat)</p>
            <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
              <div>
                <SocialIcon
                  network="linkedin"
                  url="https://www.linkedin.com/in/sanabil-english-high-school-20a1201b0/"
                  target="_blank"
                />
              </div>
              <div>
                <SocialIcon
                  network="youtube"
                  url="https://www.youtube.com/@sanabilschool3578"
                  target="_blank"
                />
              </div>
              <div>
                {" "}
                <SocialIcon
                  network="facebook"
                  url="https://www.facebook.com/sanabilenglishschool"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google maps for location */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h1 className="dispaly-4">OUR LOCATION</h1>
          <iframe
            className="gmaps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6542.168243671487!2d77.60128834687734!3d12.843501559326818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ae3361eb303%3A0x3bcbb0f4b38f0e0!2sSanabil%20English%20High%20School!5e0!3m2!1sen!2sin!4v1678604898185!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
