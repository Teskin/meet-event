import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

class App extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="App fade-in">
                    <Row className="App-header">
                        <Col xs>
                            <h1 className="App-title">Meet<label>Event</label></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="side" xs></Col>
                        <Col xs>
                            <div className="space-50"></div>
                            <div className="space-50"></div>
                            <div className="space-50"></div>
                            <div className="space-50"></div>
                            <p className="App-intro fade-in">
                                Incontra persone nuove in posti nuovi.
                            </p>
                        </Col>
                        <Col className="side" xs></Col>
                    </Row>
                    <Row>
                        <Col className="side" xs></Col>
                        <Col xs>
                            <div className="space-50 fade-in"></div>
                            <p>Meet<label>Event</label> è un'app che ti permette di organizzare incontri con persone interessate ai tuoi eventi preferiti.</p>
                        </Col>
                        <Col className="side" xs></Col>
                    </Row>
                    <Row>
                        <Col className="side" xs></Col>
                        <Col xs>
                            <div className="space-50"></div>
                            <button type="button" className="fade-in"> Compila il questionario</button>
                        </Col>
                        <Col className="side" xs></Col>
                    </Row>
                    <Row>
                        <Col className="side" xs></Col>
                        <Col xs>
                            <div className="space-50"></div>
                        </Col>
                        <Col className="side" xs></Col>
                    </Row>
                    <Row>
                        <Col className="side" xs></Col>
                        <Col xs>
                            <div className="space-50"></div>
                        </Col>
                        <Col className="side" xs></Col>
                    </Row>
                    <Row>
                        <Col className="side" xs></Col>
                        <Col xs>
                            <div className="space-50"></div>
                        </Col>
                        <Col className="side" xs></Col>
                    </Row>
                </Grid>
            </div>);
    }
}

export default App;
