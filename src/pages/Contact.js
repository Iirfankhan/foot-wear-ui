import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  
} from "mdb-react-ui-kit";


function Contact() {
  return (
    <MDBContainer className="py-5">
      <MDBRow>
       
       

        {/* Contact Form Column */}
        <MDBCol md="6" lg="8" xl="8 p-5">
          <h3 className="text-uppercase mb-4">Send Us a Message</h3>
          <form>
            {/* Name Input */}
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="form-group mb-4">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <MDBBtn color="primary" type="submit">
              Send Message
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;
