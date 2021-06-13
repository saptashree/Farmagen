import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import classes from './watermelon.module.css';


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

const Watermelon = () => {
  return (
    <div>
      <Container className={classes.watermelon}>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>
              Watermelon (Citrullus lanatus) is a plant species in the family
              Cucurbitaceae, a vine-like flowering plant originally domesticated
              in West Africa. It is a highly cultivated fruit worldwide, having
              more than 1000 varieties.
            </p>
            <h3>Agronomy practices for growing Watermelon</h3>
            <p> {iCon} Soil {aIcon} Well drained sandy loams and alluvial soils at riverbed are best suited</p>
            <p> {iCon}Sowing time {aIcon} As per the regional practices and timings</p>
            <p> {iCon}Optimum temp. for germination {aIcon} 28-32°C</p>
            <p> {iCon}Spacing {aIcon} Row to Row: 150 cm</p>
            <p> {iCon}Seed rate {aIcon} 300-400 gm/acre</p>
            <p> {iCon}SeClimate {aIcon} Hot weather with sunshine hours favours increased sweetness</p>
            <p> {iCon}Preparation of Main field {aIcon} Deep ploughing and harrowing. Add well decomposed FYM 10-12 tons/acre. Open ridges & furrows at required spacing and apply basal dose of fertilizer Irrigate one day before sowing. Sow 2 seeds per hill</p>
            <p> {iCon}Chemical Fertilizer{aIcon} Fertilizer requirement varies with soil fertility</p>
            <p> {iCon}Basal dose before sowing {aIcon} 25:50:50 NPK kg/acre</p>
            <p> {iCon}Top dressing 30 days after sowing {aIcon} 25:50:50 NPK kg/acre Apply micronutrient as and when required</p>
            <p> {iCon}Plant Protection{aIcon} Follow plant protection measures as and when required</p>
            <p>Note: Recommendations may vary due to change in place and season</p>
</Col>

          <Col>
            <img src="/images/watermelon face.jpg" height={340} width={540} />
          </Col>
        </Row>
      </Container>
      <Container className={classes.varieties}>
          <Row>
              <h3>Varieties</h3>
              <Col>
            <img src="/images/naina.jpg" height={350} width={"100%"} />
            <h4>Naina</h4>
          </Col>
          <Col>
            <img src="/images/megha.jpg" height={350} width={"100%"} />
            <h4>Megha</h4>
          </Col>
          <Col>
            <img src="/images/prince.jpeg" height={350} width={"100%"} />
            <h4>Prince</h4>
          </Col>
          </Row>
          <Row>
          <Col>
            <img src="/images/super nova.jpg" height={350} width={"100%"} />
            <h4>Nova</h4>
          </Col>
          <Col>
            <img src="/images/glory.jpg" height={350} width={"100%"} />
            <h4>Glory</h4>
          </Col>
          <Col>
            <img src="/images/supreem.jpg" height={350} width={"100%"} />
            <h4>Supreem</h4>
          </Col>
          </Row>
      </Container>
    </div>
  );
};
export default Watermelon;
