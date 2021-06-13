import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import classes from "./gourd.module.css";

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

const Gourd = () => {
  return (
    <div className={classes.gourd}>
      <Container>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>
              Gourds include the fruits of some flowering plant species in the
              family Cucurbitaceae, particularly Cucurbita and Lagenaria. The
              term refers to a number of species and subspecies, many with hard
              shells, and some without. One of the earliest domesticated types
              of plants, subspecies of the bottle gourd, Lagenaria siceraria,
              have been discovered in archaeological sites dating from as early
              as 13,000 BC. Gourds have had numerous uses throughout history,
              including as tools, musical instruments, objects of art, film, and
              food.
            </p>
            <h3>Agronomy practices for growing Gourds</h3>
            <p> {iCon} Soil {aIcon} Well drained sandy loam and clay loam soil is suitable</p>
            <p> {iCon}Sowing time {aIcon} Rainy and Summer</p>
            <p> {iCon} Optimum temp. for germination {aIcon} 28- 32°C</p>
            <p> {iCon} Spacing {aIcon} Row to Row: 120 cm, Plant to Plant: 45 cm</p>
            <p> {iCon}  Seed rate {aIcon} 600-700 gm/ acre</p>
            <p> {iCon} Preparation of Main field {aIcon} Deep ploughing and harrowing. Add well decomposed FYM 7-8 tonnes per acre. Open ridges & furrows at required spacing (Apply basal dose of fertilizer as recommended). Irrigate the field one day before sowing</p>
            <p> {iCon}  Chemical Fertilizer {aIcon} Fertilizer requirement varies with soil fertility</p>
            <p> {iCon} Basal dose before sowing {aIcon} 25:50:50 NPK kg/acre</p>
            <p> {iCon} Basal dose before sowing {aIcon} 25:50:50 NPK kg/acre</p>
            <p> {iCon}  Plant Protection{aIcon} Follow plant protection measures as and when required</p>
            <p>Recommendations may vary due to change in place and season</p>
          </Col>
          <Col>
            <img src="/images/gourd face.jpg" height={600} width={540} />
          </Col>
        </Row>
      </Container>
      <Container>
      <Row>
          <h3>Varieties</h3>
          <Col>
            <img src="/images/navya.jpg" height={350} width={"100%"} />
            <h4>Navya</h4>
          </Col>
          <Col>
            <img src="/images/swetha.jpg" height={350} width={"100%"} />
            <h4>Swetha</h4>
          </Col>
          <Col>
            <img src="/images/usha.jpg" height={350} width={"100%"} />
            <h4>Usha</h4>
          </Col>
        </Row>
        <Row>
        <Col>
            <img src="/images/mini.jpg" height={350} width={"100%"} />
            <h4>Mini</h4>
          </Col>
          <Col>
            <img src="/images/ricky.jpg" height={350} width={"100%"} />
            <h4>Ricky</h4>
          </Col>
          <Col>
            <img src="/images/esha.jpg" height={350} width={"100%"} />
            <h4>Esha</h4>
          </Col>
        </Row>
        <Row>
        <Col>
            <img src="/images/lasya.jpg" height={350} width={"100%"} />
            <h4>Lasya</h4>
          </Col>
          <Col>
            <img src="/images/shalini.jpg" height={350} width={"100%"} />
            <h4>Shalini</h4>
          </Col>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gourd;
