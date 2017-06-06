import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import views from './view.config'

import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Row, Container,
    Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink  } from 'reactstrap';


class App extends Component {

    toQueryString(paramsObject) {
        return Object
            .keys(paramsObject)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
            .join('&');
    }

    getCurrentView() {
        var view = views.filter(i => i.name == this.props.view);
        return view[0].url + '?' + this.toQueryString(this.props.query);
    }

    handleNav(view) {
        window.postMessage({type: 'APP_MESSAGE', actionType: 'NAVIGATION', payload: {view}}, '*');
    }

    render() {
        const bg = views.map((v) =>
            <NavItem key={v.name}>
                <NavLink active={v.name == this.props.view} href="#" onClick={this.handleNav.bind(this, v.name)}>{v.name}</NavLink>
            </NavItem>
        );
        return (
            <div id="main">
                <Container>
                    <Row>
                        <Nav pills>
                            {bg}
                        </Nav>
                        <hr/>

                    </Row>
                    <hr className="nav-separator"/>
                    <Row className="main-row">
                        <iframe id="dashboard-iframe" src={this.getCurrentView()}></iframe>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
