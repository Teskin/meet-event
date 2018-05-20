import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Menu from './components/menu';

const menuArray = [{
    id: 1,
    name: "Chi siamo?"
},
    {
        id: 2,
        name: "La nostra idea"
    },
    {
        id: 3,
        name: "Contattaci"
    },
    {
        id: 4,
        name: "Dove trovarci"
    }];

class App extends Component {
    render() {
        return (
            <Grid fluid className="App fade-in">
                <Row className="App-header">
                    <Col xs>
                        <div className="container">

                            <div className="App-title title-container">
                                <h1>Lala<label>Band</label></h1>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Menu elements={menuArray}/>
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
                        <p><label>Band</label> è il progetto che si propone di creare una rete di connessione tra chi ama la musica, o perché no, tra chi semplicemente cerca compagnia.
L’applicazione permetterà a persone che condividono gli stessi interessi di mettersi in contatto, inoltre fornirà un accurato aggiornamento sui concerti in programmazione.
</p>
                    </Col>
                    <Col className="side" xs></Col>
                </Row>
                <Row>
                    <Col className="side" xs>

                    </Col>
                    <Col xs>
                        <div className="space-50"></div>
                        <a className="button fade-in"
                           href="https://docs.google.com/forms/d/e/1FAIpQLScTIq5Jsm2yNKUgp0Tqc30bSXg3ti_J9kb9Nwz_PGMNcl46Lw/viewform?usp=sf_link">Compila
                            il modulo</a>
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
                    </Col>
                    <Col className="side" xs></Col>
                </Row>
                <div className="footer">
                    <Row>
                        <Col className="side" xs></Col>
                        <Col xs>
                            <div className="space-50">
                                <p>Per informazioni contattare: email@email.com</p>
                            </div>
                        </Col>
                        <Col className="side" xs></Col>
                    </Row>
                </div>
            </Grid>


        );
    }
}

export default App;
