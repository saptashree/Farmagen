import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Component/Home";
import About from "./Component/About";
import Products from "./Component/Products";
import Contact from "./Component/Contact";
import MainNav from "./Navigation/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Readmore from "./Component/Readmore";
import Tomato from "./Component/Tomato";
import Pepper from "./Component/Pepper";
import Watermelon from "./Component/Watermelon";
import Cucumber from "./Component/Cucumber";
import Eggplant from "./Component/Eggplant";
import Gourd from "./Component/Gourd";
import Okra from "./Component/Okra";
import Pumpkin from "./Component/Pumpkin";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/readmore">
          {" "}
          <Readmore />
        </Route>
        <Route path="/tomato">
          {" "}
          <Tomato />
        </Route>
        <Route path="/pepper">
          <Pepper />
        </Route>
        <Route path="/watermelon">
          <Watermelon />
        </Route>
        <Route path="/cucumber">
          <Cucumber />
        </Route>
        <Route path="/eggplant">
          <Eggplant />
        </Route>
        <Route path="/gourd">
          <Gourd />
        </Route>
        <Route path="/okra">
          <Okra />
        </Route>
        <Route path="/pumpkin">
          <Pumpkin />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
