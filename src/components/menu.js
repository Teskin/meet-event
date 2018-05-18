import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import _ from "lodash";





const Menu = ({elements}) => {
    const MenuElement = _.map(elements, function (element) {
            return (<li className="menu-element" key={element.id}>
                {element.name}
            </li>);
        }
    );

    return (<Row>
        <Col xs></Col>
        <Col xs>
            <ul className="menu">
                {MenuElement}
            </ul>
        </Col>
        <Col xs></Col>
    </Row>);
}

export default Menu;