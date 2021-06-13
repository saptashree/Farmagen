import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from "reactstrap";
import { NavLink } from 'react-router-dom';


const Products=()=>{
    
        const options = {
            items: 1,
            nav: true,
            rewind: true,
            autoplay: true
        }
        return( 
        <div>

            <Container>
            <Row>
                            <Col>
                            <h1>What our products are</h1>
              <OwlCarousel className="owl-theme" nav='true' margin={4}>
                    

                        <div><NavLink to='/tomato'> <h3> Tomato</h3><img className="img" src= {'/images/photo5.jpg'} width={'100%'} /></NavLink></div>
                       <div> <NavLink to='/pepper'><h3> Hot pepper</h3>< img className="img" src= {'/images/photo6.jpg'}/></NavLink></div>
                        <div><NavLink to ='/watermelon'><h3>Watermelon</h3><img class='item'className="img" src= {'/images/photo7.jpg'} /></NavLink></div>
                        <div><NavLink to='/cucumber'><h3>Cucumber</h3><img className="img" src= {'/images/photo8.jpg'} /></NavLink></div>
                        <div><NavLink to='/eggplant'><h3>Eggplant</h3><img className="img" src= {'/images/photo9.png'} /></NavLink></div>
                       <div><NavLink to='/gourd'><h3>Gourd</h3> <img className="img" src= {'/images/photo10.jpeg'} /></NavLink></div>
                       <div><NavLink to ='/okra'><h3>Okra</h3> <img className="img" src= {'/images/photo12.jpeg'} /></NavLink></div>
                       <div><NavLink to='/pumpkin'><h3>Pumpkin</h3> <img className="img" src= {'/images/photo11.png'} /></NavLink></div>
                      
                         
                </OwlCarousel>
                </Col>
                       </Row>
                         
                </Container>
          </div>
    );
};
export default Products;