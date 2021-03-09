import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import CountryList from '../CountryList/CountryList';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                {
                    countries.map(country => <CountryList country={country} />)
                }
            </Row>
        </Container>
    );
};

export default Country;