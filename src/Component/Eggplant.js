import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import classes from "./eggplant.module.css";

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

const Eggplant = () => {
  return (
    <div className={classes.eggplant}>
      <Container>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>
              Eggplant is a plant species in the nightshade family Solanaceae.
              Solanum melongena is grown worldwide for its edible fruit. Most
              commonly purple, the spongy, absorbent fruit is used in several
              cuisines. Typically used as a vegetable in cooking, it is a berry
              by botanical definition. As a member of the genus Solanum, it is
              related to the tomato and potato. Like the tomato, its skin and
              seeds can be eaten, but, like the potato, it is usually eaten
              cooked. Eggplant is nutritionally low in macronutrient and
              micronutrient content, but the capability of the fruit to absorb
              oils and flavors into its flesh through cooking expands its use in
              the culinary arts.
            </p>
            <h3>Agronomy for growing Eggplant</h3>
            <p> {iCon} Soil {aIcon} Well drained sandy loam soil is suitable</p>
            <p> {iCon} Sowing time {aIcon} As per the regional practices and timings</p>
            <p> {iCon} Optimum temp. for germination {aIcon} 25-30°C</p>
            <p> {iCon}Transplanting {aIcon} 30-35 days after sowing</p>
            <p> {iCon}Spacing {aIcon} Row to Row: 75-90 cm, Plant to Plant: 60-75 cm</p>
            <p> {iCon} Seed rate {aIcon} 100 gm/acre</p>
            <p> {iCon} Preparation of Main field {aIcon} Deep ploughing and harrowing. Apply well decomposed FYM @ 7-8 tons per acre followed by harrowing to mix in the soil thoroughly. Open the ridges and furrows at required spacing. Irrigate the field and make the holes at the recommended spacing. Transplanting should be done during afternoon, after transplanting light irrigation should be given for quick and better establishment
</p>
<p> {iCon} Chemical Fertilizer {aIcon} Fertilizer requirement varies with soil fertility</p>
<p> {iCon} First dose 6-8 days after transplanting {aIcon} 50:50:60 NPK kg/acre</p>
<p> {iCon} Second dose 20-25 days after first application {aIcon}25:50:60 NPK kg/acre</p>
<p> {iCon} Third dose 20-25 days after second application {aIcon} 25:50:60 NPK kg/acre Calcium nitrate (1%solution) should be sprayed at the time of flowering increases fruit-set</p>
<p> {iCon} Plant Protection {aIcon} Follow plant protection measures as and when require</p>

          </Col>
          <Col>
            <img src="/images/photo9.png" height={340} width={540} />
          </Col>
        </Row>
      </Container>
      <Container>
      <Row>
          <h3>Varieties</h3>
          <Col>
            <img src="/images/virat.jpg" height={350} width={"100%"} />
            <h4>Virat</h4>
          </Col>
          <Col>
            <img src="/images/rangeela.jpg" height={350} width={"100%"} />
            <h4>Rangeela</h4>
          </Col>
          <Col>
            <img src="/images/rena.jpg" height={350} width={"100%"} />
            <h4>Rena</h4>
          </Col>
        </Row>
        <Row>
          
          <Col>
            <img src="/images/harshita.jpg" height={350} width={"100%"} />
            <h4>Harshita</h4>
          </Col>
          <Col>
            <img src="/images/pranati.jpg" height={350} width={"100%"} />
            <h4>Pranati</h4>
          </Col>
          <Col>
            
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default Eggplant;
