import React from "react";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#D3D3D3", color: "white" }}
      className="text-center text-lg-start text-muted mt-5 "
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ fontWeight: "bold" }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#3b5998", fontSize: "24px" }}
            />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#1da1f2", fontSize: "24px" }}
            />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#e4405f", fontSize: "24px" }}
            />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#0077b5", fontSize: "24px" }}
            />
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Football Wears
              </h6>
              <p>
                Discover premium products and services tailored to meet your
                needs. We ensure excellence in every aspect of our business.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#" className="text-reset">
                  Shirts
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Sports Shoes
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Accessories
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Equipment
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p>
                <Link to="/about" className="text-reset">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  FAQ
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Support
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon
                  icon={faHome}
                  className="me-2"
                  style={{ color: "#3b5998" }}
                />
                Pehsawar, NY 10012, PK
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-3"
                  style={{ color: "#1da1f2" }}
                />
                Footballwears.com
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="me-3"
                  style={{ color: "#e4405f" }}
                />
                +1 234 567 890
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPrint}
                  className="me-3"
                  style={{ color: "#0077b5" }}
                />
                +1 234 567 891
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <Link to="/" className="text-reset fw-bold">
          Football Wears
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
