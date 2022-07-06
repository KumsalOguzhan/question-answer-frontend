import React from 'react'
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Navi from './Navi';
//import Menu from './menu';

const Layout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          {/* <Col xs="3"><Menu /></Col> */}
          <Col xs="12"><Outlet /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;