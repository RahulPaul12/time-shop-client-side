import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Review from "../../Review/Review";
const Carouselm = () => {
    return (
       
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginBottom:50}}>
            <Review>
               
            <Card style={{width:'100%', textAlign:'center'}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Mr. Daniel</Card.Title>
      <Card.Text>
       This is a better shop for Buy Watch. I am Satisfied.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
            <Card style={{width:'100%', textAlign:'center'}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Mrs. Foeww</Card.Title>
      <Card.Text>
       This is better Shop for Getting better stylish Watch .{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
            <Card style={{width:'100%' , textAlign:'center'}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Mr. Dived</Card.Title>
      <Card.Text>
        I love this shop Very Much. Its better Watch Shop i get.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
            </Review>
        </div>
        
    );
};

export default Carouselm;