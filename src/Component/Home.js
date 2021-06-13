import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import About from "./About";
import classes from "./Home.module.css";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        selectedItem={true}
      >
        <div className={classes.slide1}>
          <img
            src="/images/photo1.jpg"
            style={{ width: "100%", height: "700px" }}
            alt=" "
          />
          <h1>Welcome To Farmagen</h1>
          <h2> Delivering future with technology</h2>
        </div>
        <div>
          <img
            src="/images/photo2.jpg"
            style={{ width: "100%", height: "700px", paddingTop: "20px" }}
            alt=" "
          />
        </div>
        <div>
          <img
            src="/images/photo3.jpeg"
            style={{ width: "100%", height: "700px" }}
            alt=" "
          />
        </div>
      </Carousel>
      <About />
      <Products />
    </div>
  );
};
export default Home;
