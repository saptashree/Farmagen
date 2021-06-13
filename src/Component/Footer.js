import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import { FaMapMarkerAlt,FaEnvelope,FaTwitter,FaFacebookF,FaInstagram,FaGooglePlusG,FaLinkedinIn } from "react-icons/fa";
import {ImPhone} from 'react-icons/im';
import {BiChevronRight} from 'react-icons/bi';

const style1 = { color: "#01af41", fontSize: "25px" };

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <Row>
          <Col className={classes.col1}>
            <img src="./images/Logo.svg" height={60} width={255} />
            <br />
            <p><FaMapMarkerAlt style={style1} />
            FARMAGEN CROP SCIENCE W-7B, D-243, UMASHANKAR NAGAR, 1ST CROSS,
            BEHIND IB, RANEBENNUR, HAVERI, DIST, KARNATAKA-581115<br/>
            <strong><ImPhone style={style1}/>+91 8373355370</strong><br/>
            <strong><FaEnvelope style={style1}/>info@farmagencrops.com </strong><br/>
            <a href='#'><FaTwitter style={style1}/></a>
            <a href='#'><FaFacebookF style={style1}/></a>
            <a href='#'><FaInstagram style={style1}/></a>
            <a href='#'><FaGooglePlusG style={style1}/></a>
            <a href='#'><FaLinkedinIn style={style1}/></a></p>
          </Col>
          <Col className={classes.col2}>
          <h4>Useful Links</h4>
          <ul>
              <li><BiChevronRight/> <a href='/about'>INTRODUCTION</a> </li>
              <li><BiChevronRight/> <a href='/readmore'>ABOUT</a> </li>
              <li><BiChevronRight/> <a href='/product'>PRODUCT CATLAOGUE</a> </li>
              <li><BiChevronRight/> <a href='/contact'>CONTACT</a> </li>

          </ul>
          </Col >
          <Col className={classes.col2}>
          <h4>Our Products</h4>
          <ul>
              <li><BiChevronRight/> <a href='/about'>Tomato</a> </li>
              <li><BiChevronRight/> <a href='/readmore'>Hot Pepper</a> </li>
              <li><BiChevronRight/> <a href='/watermelon'> Watermelon</a> </li>
              <li><BiChevronRight/> <a href='/cucumber'>Cucumber</a> </li>
              <li><BiChevronRight/> <a href='/eggplant'>Eggplant</a> </li>
              <li><BiChevronRight/> <a href='/gourd'>Gourd</a> </li>
              <li><BiChevronRight/> <a href='/okra'>Okra</a> </li>
              <li><BiChevronRight/> <a href='/pumpkin'>Pumpkin</a> </li>

          </ul>
          </Col>
          
          <Col className={classes.col2}>
          <h4>Our Newsletter</h4>
          <p>Please subscribe to receive our newsletter</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
