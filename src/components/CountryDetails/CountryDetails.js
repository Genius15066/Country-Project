import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import {useHistory } from "react-router-dom";
import './CountryDetail.css'

const CountryDetails = () => {
    const { name } = useParams();
    const [countryDetail, setCountryDetail] = useState([]);
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setCountryDetail(data.[0]))
    }, [])
    const { flag, region,capital,currencies,languages,population,area,demonym } = countryDetail;
    const history = useHistory();
    const handleClick=()=>{
        const url=`/country`;
        history.push(url);
    }

    return (
        <div className="d-flex justify-content-center align-items-center p-3 ">
            <Card style={{ width: '22rem' }} className="info d-flex justify-content-center align-items-center p-3" >
                <Card.Img className="img-style" variant="top" src={flag} />
                <Card.Body className="text-center">
                    <Card.Title className="country-name">{name}</Card.Title>
                    <Card.Text>
                      <h6>Region: {region}</h6>
                      <h6>Capital: {capital}</h6>
                      <h6>Nationality: {demonym}</h6>
                      <h6>Area: {area}</h6>
                      <h6>Population: {population}</h6>
                      <h6>Currency: {currencies?.[0].name}</h6>
                      <h6>Language: {languages?.[0].name}</h6>
                    </Card.Text>
                    <Button onClick={()=>handleClick()} variant="success">Back to Home</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default CountryDetails;