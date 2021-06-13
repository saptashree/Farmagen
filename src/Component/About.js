import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import classes from "./About.module.css";
import { NavLink } from "react-router-dom";
import Card1 from "./Card1";
import { FaRegEye } from "react-icons/fa";
import { BiBullseye } from "react-icons/bi";
import { IoIosWater } from "react-icons/io";

 const style= {fontSize:'60px',color:'#01af41',marginTop:'-11%'}
 
  
const About = () => {
  return (
    <div>
      <Container>
        <div className={classes.container}>
          <Row>
            <Col>
              <h3>Who we really are</h3>
              <h3>
                About <br></br>Farmagen
              </h3>
              <p>
                Farmagen has emerged in order to provide quality seeds, easily
                accessible and affordable for farmers, Farmagen depends on
                Research and Development in the pursuit of innovation to serve
                its customers the best quality seeds they deserve
              </p>
              <NavLink to ='/readmore'>
                <button> Read More </button>
              </NavLink>
            </Col>
            <Col>
              <div>
                <img src="/images/photo4.jpg" alt="doctor"></img>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div>
          <Row>
            <Col>
                <Card1 className={classes.card}
                icon={<FaRegEye  style={style}/>}
                Cardsubtitle="Vision" 
                text="To reach the pinnacle of performance and emerge as one of the leading and eminent agricultural sciences
              company in the world."
              />
            </Col>

            <Col>
              <Card1
                icon={<BiBullseye style={style}/>}
                Cardsubtitle="Mission"
                text="Leveraging latest farming technologies to deliver high quality seeds that maximize crop
              productivity."
              />
            </Col>

            <Col>
              <Card1
                icon={<IoIosWater style={style}/>}
                Cardsubtitle="Values"
                text="Integrity, Professionalism Commitment, Honesty, Respect, Passion, Team Work."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default About;
