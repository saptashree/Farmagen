import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import classes from "./okra.module.css";

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

const Okra = () => {
  return (
    <div >
      <Container className={classes.description}>
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
            <p> {iCon} Soil {aIcon} Okra prefers loose, well drained and rich soil. The ideal pH for growth of plants is 6-8</p>
            <p> {iCon} Season {aIcon} As kharif crop, seeds are sown from May to July and as a spring summer crop, sowing is done during February-March</p>
            <p> {iCon} Seed rate and spacing {aIcon} Seed rate recommended is 8-10 kg/ha. Distance between two sets is kept as 60 cm</p>
            <p> {iCon} Land preparation and sowing {aIcon} Field is ploughed thoroughly for 2-3 times for making soil to a fine tilth. Ridges and furrows or raised beds are prepared and dibbling on sides of ridges or on raised beds sows seeds. Soak seeds for 6-12 hours before sowing to enhance germination during summer</p>
            <p> {iCon} Manuring and fertilizer application{aIcon} Apply20-25 t of farm yard manure as basal dose at the time off in al ploughing. A dose of 150 kg each of N, P2O5 and K2O is recommended. One third dose of N, full P and K are to be applied as basal dose. Remaining N has to be applied in two split doses, 4 weeks after sowing and at flowering and fruiting stages. Split application of N in soil at every 3rd picking is advantageous for getting high yield, for increasing number of harvests and to maintain size of fruits towards last harvests</p>
            <p> {iCon} Harvesting and yield{aIcon} Harvest fruits when they attain maximum size but still tender. Fruits of 6-8 cm long are preferred for export purposes. This is usually attained by 5-6 days after opening of flower</p>
            <p> {iCon}Yield {aIcon} 6.0 – 8.0 t / ha for spring-summer crop, 10 – 12.5 t / ha for kharif crop</p>
            
          </Col>
          <Col>
            <img src="/images/okra display.jpeg" height={330} width={540} />
          </Col>
        </Row>
      </Container>
      <Container className={classes.varieties}>
      <Row>
          <h3>Varieties</h3>
          <Col>
            <img src="/images/raksha.jpeg" height={350} width={"100%"} />
            <h4>Navya</h4>
          </Col>
          <Col>
            <img src="/images/nuthan.jpg" height={350} width={"100%"} />
            <h4>Swetha</h4>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Okra;
