import React, {useState, useEffect} from 'react';
import {CardDeck, Card, Button, Container, Row, Col} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const FlightDetails = () => {
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch('flights.json')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setData(data);
        }).catch(error => {
            console.log(error); 
        });
    },[])

    const time_convert = (num) => { 
        const hours = Math.floor(num / 60);  
        const minutes = num % 60;
        return `${hours}h${minutes}`;         
    }

    const directFlight = (stop) => {
        if (stop >= 1)
            return '1 Stop'
        else {
            return 'Direct'
        }
    };
    
    return (
        <React.Fragment>
            <CardDeck>
                <Container>
                    <Card className="shadow mt-3" style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    <img src="/wizzair-logo.gif" alt="Wizz Air" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][0].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][0].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][0].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][0].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][0].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][0].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    <img src="/wizzair-logo.gif" alt="Wizz Air" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][3].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][3].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][3].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][3].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][3].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][3].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <div className='agentPrice'>
                                        <h2 className='price'>{data["itineraries"] && data["itineraries"][0].price}</h2>
                                        <p className='agent'>{data["itineraries"] && data["itineraries"][0].agent}</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Button className='shadow-none' variant='link' size="lg" style={{backgroundColor: '#00A698', textDecoration: 'none', color: 'white'}}>Select</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <Container>
                    <Card className="shadow mt-3" style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    <img src="/britishairways-logo.png" alt="British Airways" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][1].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][1].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][1].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][1].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][1].duration_mins))}</p>
                                        <p className='stop'>{directFlight(data["legs"] && data["legs"][1].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    <img src="/britishairways-logo.png" alt="British Airways" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][4].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][4].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][4].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][4].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][4].duration_mins))}</p>
                                        <p className='stop'>{directFlight(data["legs"] && data["legs"][4].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <div className='agentPrice'>
                                        <h2 className='price'>{data["itineraries"] && data["itineraries"][1].price}</h2>
                                        <p className='agent'>{data["itineraries"] && data["itineraries"][1].agent}</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Button className='shadow-none' variant='link' size="lg" style={{backgroundColor: '#00A698', textDecoration: 'none', color: 'white'}}>Select</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <Container>
                    <Card className="shadow mt-3" style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    <img src="/lufthansa-logo.png" alt="Lufthansa" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][2].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][2].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][2].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][2].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][2].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][2].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    <img src="/lufthansa-logo.png" alt="Lufthansa" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][5].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][5].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][5].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][5].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][5].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][5].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <div className='agentPrice'>
                                        <h2 className='price'>{data["itineraries"] && data["itineraries"][2].price}</h2>
                                        <p className='agent'>{data["itineraries"] && data["itineraries"][2].agent}</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Button className='shadow-none' variant='link' size="lg" style={{backgroundColor: '#00A698', textDecoration: 'none', color: 'white'}}>Select</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <Container>
                    <Card className="shadow mt-3" style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    <img src="/wizzair-logo.gif" alt="Wizz Air" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][0].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][0].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][0].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][0].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][0].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][0].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    <img src="/britishairways-logo.png" alt="British Airways" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][4].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][4].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][4].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][4].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][4].duration_mins))}</p>
                                        <p className='stop'>{directFlight(data["legs"] && data["legs"][4].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <div className='agentPrice'>
                                        <h2 className='price'>{data["itineraries"] && data["itineraries"][3].price}</h2>
                                        <p className='agent'>{data["itineraries"] && data["itineraries"][3].agent}</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Button className='shadow-none' variant='link' size="lg" style={{backgroundColor: '#00A698', textDecoration: 'none', color: 'white'}}>Select</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <Container>
                    <Card className="shadow mt-3" style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    <img src="/wizzair-logo.gif" alt="Wizz Air" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][0].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][0].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][0].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][0].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][0].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][0].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    <img src="/britishairways-logo.png" alt="British Airways" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][5].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][5].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][5].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][5].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][5].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][5].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <div className='agentPrice'>
                                        <h2 className='price'>{data["itineraries"] && data["itineraries"][4].price}</h2>
                                        <p className='agent'>{data["itineraries"] && data["itineraries"][4].agent}</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Button className='shadow-none' variant='link' size="lg" style={{backgroundColor: '#00A698', textDecoration: 'none', color: 'white'}}>Select</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <Container>
                    <Card className="shadow mt-3" style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    <img src="/britishairways-logo.png" alt="British Airways" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][1].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][1].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][1].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][1].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][1].duration_mins))}</p>
                                        <p className='stop'>{directFlight(data["legs"] && data["legs"][1].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    <img src="/wizzair-logo.gif" alt="Wizz Air" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][3].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][3].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][3].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][3].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][3].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][3].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <div className='agentPrice'>
                                        <h2 className='price'>{data["itineraries"] && data["itineraries"][5].price}</h2>
                                        <p className='agent'>{data["itineraries"] && data["itineraries"][5].agent}</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Button className='shadow-none' variant='link' size="lg" style={{backgroundColor: '#00A698', textDecoration: 'none', color: 'white'}}>Select</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <Container>
                    <Card className="shadow mt-3" style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    <img src="/lufthansa-logo.png" alt="Lufthansa" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][2].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][2].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][2].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][2].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][2].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][2].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    <img src="/wizzair-logo.gif" alt="Wizz Air" width='30px' height='40px'/>
                                </Col>
                                <Col xs={3}>
                                    <div className='leftSection'>
                                        <p className='time'>{data["legs"] && data["legs"][3].departure_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][3].departure_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '20px', color: '#A5A5A5', marginLeft: '-25px'}} />
                                </Col>
                                <Col xs={3}>
                                    <div className='middleSection'>
                                        <p className='time'>{data["legs"] && data["legs"][3].arrival_time.split('T')[1]}</p>
                                        <p className='airport'>{data["legs"] && data["legs"][3].arrival_airport}</p>
                                    </div>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={2}>
                                    <div className='rightSection'>
                                        <p className='length'>{(time_convert(data["legs"] && data["legs"][3].duration_mins))}</p>
                                        <p className='direct'>{directFlight(data["legs"] && data["legs"][3].stops)}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <div className='agentPrice'>
                                        <h2 className='price'>{data["itineraries"] && data["itineraries"][6].price}</h2>
                                        <p className='agent'>{data["itineraries"] && data["itineraries"][6].agent}</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Button className='shadow-none' variant='link' size="lg" style={{backgroundColor: '#00A698', textDecoration: 'none', color: 'white'}}>Select</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </CardDeck>
        </React.Fragment>
    )
}
export default FlightDetails;