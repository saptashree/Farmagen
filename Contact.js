import React from "react";
import IframeResizer from "iframe-resizer-react";
import { Container, Row, Col } from "reactstrap";
import { SiGooglemaps } from "react-icons/si";
import { GoClock } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import classes from "./contact.module.css";
import Form1 from "./Form1";

const style1 = {
  lineHeight: "1",

  float: "left",
  width: "30px",
  height: "30px",
  background: "#01af41",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "600px",
  transition: "all 0.3s ease-in-out",
};

const Contact = () => {
  return (
    <div>
      <Container className={classes.contact1}>
        <Row>
          <Col>
            <p>Contact Us</p>
            <IframeResizer
              className={classes.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.806218084222!2d75.63418671484037!3d14.610112189796387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzM2LjQiTiA3NcKwMzgnMTEuMCJF!5e0!3m2!1sen!2sin!4v1596826707957!5m2!1sen!2sin"
              border="0"
              width="100%"
              height="350px"
            />
          </Col>
        </Row>
      </Container>
      <Container className={classes.form}>
        <Row>
          <Col sm="4" className={classes.contact2}>
            <div className={classes.cotent3}>
              
            <SiGooglemaps style={style1} />
            <h4>Location:</h4>
            <p>XXXX</p>

            <div>
              <GoClock style={style1} />
              <h4>Open Hours:</h4>
              <p>
                Monday-Saturday: <br />
                9:00 AM - 5:00 PM
              </p>
            </div>
            <div>
              <FaEnvelope style={style1} />
              <h4>Email:</h4>
              <p>info@farmagencrops.com</p>
            </div>
            <div>
              <ImPhone style={style1} />
              <h4>Call:</h4>
              <p>+91 8373355370</p>
            </div></div>
          </Col>
          <Col lg="8">
            <Form1 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
