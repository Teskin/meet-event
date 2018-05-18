import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import _ from "lodash";


const Menu = ({elements}) => {
    const MenuElement = _.map(elements, function (element) {
            return (<li className="menu-element" key={element.id}>
                <a href="#" id={element.id.toString()}>{element.name}</a>
            </li>);
        }
    );

    return (
        <ul className="menu">
            <Row>
                <Col xs></Col>
                <Col xs>
                    {MenuElement}

                </Col>
                <Col xs></Col>
            </Row>
        </ul>
    )
        ;
}

export default Menu;