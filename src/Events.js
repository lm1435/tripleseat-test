import React from 'react'
import Event from './Event'
import data from './data.json'
import { Container, Row } from 'reactstrap'

const Events = () => {

  data.events.sort((a, b) => {
    return (a.event_start < b.event_start) ? -1 : ((a.event_start > b.event_start) ? 1 : 0);
  })

  return (
    <Container>
      <Row>
        {data.events.map((event) => (
          <Event key={event.id} event={event}/>
        )
        )}
      </Row>
    </Container>
  )
}

export default Events;
