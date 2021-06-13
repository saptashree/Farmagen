import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import classes from './cucumber.module.css';

const iCon = (
  <IconContext.Provider value={{ color: "green", size: "30" }}>
    <BiCheckCircle />
  </IconContext.Provider>
);
const aIcon = (
  <IconContext.Provider value={{ color: "green", size: "30" }}>
    <BsArrowRight />
  </IconContext.Provider>
);

const Cucumber = () => {
  return (
    <div className={classes.cucumber}> 
      <Container>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>
              Cucumber (Cucumis sativus) is a widely-cultivated creeping vine
              plant in the Cucurbitaceae gourd family that bears cucumiform
              fruits, which are used as vegetables. There are three main
              varieties of cucumber—slicing, pickling, and
              burpless/seedless—within which several cultivars have been
              created. The cucumber originates from South Asia, but now grows on
              most continents, as many different types of cucumber are traded on
              the global market. In North America, the term wild cucumber refers
              to plants in the genera Echinocystis and Marah, though the two are
              not closely related.
            </p>
            <h3>Agronomy practices for growing Cucumber</h3>
            <p> {iCon} Soil {aIcon} Clay to sandy loam</p>
            <p> {iCon} Sowing time {aIcon} As per the regional practices and timings</p>
            <p> {iCon}  Optimum temp. for germination {aIcon}25-30°C</p>
            <p> {iCon} Spacing {aIcon} Row to Row: 180 cm, Plant to Plant: 30 cm</p>
            <p> {iCon} Seed rate {aIcon} 300-400 gm/acre</p>
            <p> {iCon}Preparation of Main field{aIcon}Deep ploughing and harrowing. Add well decomposed FYM 7 8 tones per acre. Open ridges & furrows at required spacing (Apply basal dose of fertilizer as recommended). Irrigate the field one day before sowing. Sow 2 seeds per hill Irrigate whenever require</p>
            <p> {iCon} Chemical Fertilizer {aIcon} Fertilizer requirement varies with soil fertility</p>
            <p> {iCon}  Basal dose before sowing{aIcon} 40:60:60 NPK kg/acre</p>
            <p> {iCon} Top dressing 30 days after sowing {aIcon} 25:00:60 NPK kg/acre</p>
            <p> {iCon}  After third picking{aIcon} 25:00:00 NPK kg/acre Apply micronutrient as and when required</p>
            <p> {iCon} Plant Protection{aIcon} Follow plant protection measures as and when required</p>
            <p>Note: Recommendations may vary due to change in place and season </p>
          </Col>
          <Col>
            <img src="/images/cucumber face.jpg" height={540} width={540} />
          </Col>
        </Row>
      </Container>
      <Container>
      <Row>
          <h3>Varieties</h3>
          <Col>
            <img src="/images/chaaya.jpg" height={350} width={"100%"} />
            <h4>Chaaya</h4>
          </Col>
          <Col>
            <img src="/images/sarthak.jpg" height={350} width={"100%"} />
            <h4>Sarthak</h4>
          </Col>
          <Col>
            <img src="/images/lena.jpg" height={350} width={"100%"} />
            <h4>Lena</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cucumber;
