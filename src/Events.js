import React from 'react';
import Event from './Event';
import { Container, Row } from 'reactstrap';

const Events = ({ events }) => {
  return (
    <Container>
      <Row>
        {events.map((event) => (
          <Event key={event.id} event={event}/>
        )
        )}
      </Row>
    </Container>
  )
}

export default Events;
