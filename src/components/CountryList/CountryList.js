import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './CountryList.css';
import {useHistory } from "react-router-dom";
  

const CountryList = (props) => {
    const { flag, name} = props.country;
    const history = useHistory();
    const handleClick=(name)=>{
        const url=`/country/${name}`;
        history.push(url);
    }

    return (
        <Col sm={6} md={3} xs={8} className="mt-3 mb-4 ">
            <Card className="card-style d-flex justify-content-center align-items-center p-3">
                <Card.Img variant="top" className="card-image " src={flag}/>
                <Card.Body className="text-center">
                    <Card.Title className="title">{name}</Card.Title>
                    <Button onClick={()=>handleClick(name)} variant="primary">Country Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CountryList;