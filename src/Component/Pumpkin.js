import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import classes from "./pumpkin.module.css";

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

const Pumpkin = () => {
  return (
    <div>
      <Container className={classes.description}>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>
              A pumpkin is a cultivar of winter squash that is round with
              smooth, slightly ribbed skin, and is most often deep yellow to
              orange in coloration. All pumpkins are winter squash, mature fruit
              of certain species in the genus Cucurbita. Native to North America
              (north eastern Mexico and the southern United States), pumpkins
              are one of the oldest domesticated plants, having been used as
              early as 7,500 to 5,000 BC. Pumpkins are a warm-weather crop that
              is usually planted in early July. The specific conditions
              necessary for growing pumpkins require that soil temperatures 8
              centimetres (3 in) deep are at least 15.5 °C (60 °F) and that the
              soil holds water well. Pumpkin crops may suffer if there is a lack
              of water or because of cold temperatures (in this case, below 18
              °C or 65 °F). Soil that is sandy with poor water retention or
              poorly drained soils that become waterlogged after heavy rain are
              both detrimental. Pumpkins are, however, rather hardy, and even if
              many leaves and portions of the vine are removed or damaged, the
              plant can very quickly re-grow secondary vines to replace what was
              removed.
            </p>
            <h3>Agronomy practices for growing Gourds</h3>
            <p> {iCon} Soil Requirement {aIcon} This commercial crop can thrive well on a wide variety of soils. Whatever, A soil with sandy loam along with good drainage power and all essential organic matter is supposed to be the best soil for pumpkins. Soil ph ranging between 5.5 to 7.5 is considered as the best ph for growing pumpkins</p>
            <p> {iCon} Season {aIcon} As kharif crop, seeds are sown from May to July and as a spring summer crop, sowing is done during February-March</p>
            <p> {iCon} When to Plant Pumpkin Seeds {aIcon} Pumpkins can grow all around the year, where there is a good source of water is available. However, generally two crops of this vegetable can be obtained; in the time period of January to March and September to December.</p>
            <p> {iCon} Method Of Propagation {aIcon}Pumpkins are mainly propagated with the help of pumpkins seed.</p>
            <p> {iCon} How to Plant Pumpkin Seeds {aIcon} Pumpkins seeds do not germinate in too cold temp. For planting Pumpkins, seeds should be sown directly on the main field. Planting on the raised bed encourages drainage to avoid the problem of constant wetness of Pumpkins roots which invites numbers of pest, insects, and diseases. Generally, this crop is cultivated mainly on hills and surrounding area. So, for planting pumpkins in such area, plant about 2 to 4 seeds per hill. Seed should be sown at about 2.5 depth for best growth. Also, after seedling pumpkins, they should be thin to 1 plant per each hill lately.</p>
            <p> {iCon} Spacing {aIcon} Planting them by keeping spacing about one meter, between the plants along with spacing rows about 1.5 to 2 meters is considered as best for growing pumpkins commercially.</p>
            <p> {iCon} Seed rate {aIcon} Generally, about 2 kg of pumpkins seeds is sufficient enough for farming on one-hectare land to earn huge production.</p>


          </Col>
          <Col>
            <img src="/images/pumpkin display.jpeg" height={702} width={532} />
          </Col>
        </Row>
      </Container>
      <Container className={classes.varieteis}>
      <Row>
          <h3>Varieties</h3>
          <Col>
            <img src="/images/gaana.png" height={350} width={"100%"} />
            <h4>Gaana</h4>
          </Col>
          <Col>
            
          </Col>
          <Col>
            
          </Col>
        </Row>
        </Container>
    </div>
  );
};

export default Pumpkin;
