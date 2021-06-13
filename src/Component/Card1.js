
import classes from './Card.module.css';
import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const style1={margin:'0',fontSize:'36px',fontWeight:'700',color:'#01af41'}
const Card1 = (props) => {
  return (
    <div className={classes.container} >
      <Card  className={classes.card}>
        <CardBody>
          <CardTitle style={{textAlign:'center',fontSize:'200%'}}>{props.icon}</CardTitle>
          <CardSubtitle style={style1} >
           {props.Cardsubtitle}
          </CardSubtitle>
          <CardText>
            {props.text}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default Card1;
