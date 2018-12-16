import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';

const Wrapper = styled.div`
  margin: 1em auto;
  text-align: center; 
`

const Paragraph = styled.p`
  color: #9ad6da;
  font-size: 2em;
  margin: auto;
`

const Input = styled.input`
  border: 2px solid #e87e81
`

const headerImg = {
  display: "flex",
  alignItems: "center"
}

const header = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  color: "#e87e81",
  fontWeight: "bold"
}

const Header = ({ children, searchTerm, onSearchChange }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs="12" md="6" style={headerImg}>
            <img src="https://www.tripleseat.com/wp-content/themes/tripleseat_wordpress/images/logo.png" alt="tripleseat logo"/>
          </Col>
          <Col xs="12" md="6" style={header}>
            <form>
              <span>Search: </span>
              <Input
                type="text"
                value={searchTerm}
                onChange={onSearchChange}
              />
            </form>
          </Col>
          <Paragraph>{children}</Paragraph>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Header;
