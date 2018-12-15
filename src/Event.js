import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap';

const Event = ({
  event : {
    id,
    name,
    status,
    event_start,
    event_end,
    rooms,
    quest_count,
    account,
    contact
  }
}) => {
  const formatDate = (date) => {
    let d = getDate(date);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let day = d.getDate();
    let formatted = month + ' ' + day + ' ' + year;
    return formatted;
  }

  const getEventTimes = (date) => {
    let d = getDate(date);
    let hours = d.getHours();
    let minutes = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    let startTime = hours > 13 ? hours-12 + ':' + minutes + " PM" : hours + ':' + minutes + " AM";
    return startTime;
  }

  const getDate = (date) => {
    let d = new Date(date);
    return d;
  }

  const colorObj = {
    PROSPECT: '#89c6ca',
    TENTATIVE: '#d96c6e',
    DEFINITE: '#89be9d',
    CLOSED: '#d5cc8c',
    LOST: '#746E64',
    WAITLISTED: '#1c1253'
  }
  
  let EventName = {
    color: colorObj[status] || 'black',
    textTransform: 'capitalize'
  }

  let statusStyles = {
    backgroundColor: colorObj[status],
    color: 'white',
    padding: '0 1em'
  }

  const Wrapper = styled.div`
    border: 1px solid grey;
    margin: 1em auto;
    padding: 1em;
  `

  return (
    
    <Col xs="12" md="6">
      <Wrapper>
        <h2 style={EventName}>
          {name}
        </h2>
        <Row>
          <Col>Date:</Col>
          <Col>{formatDate(event_start)}</Col>
        </Row>
        <Row>
        <Col>Start:</Col>
        <Col>{getEventTimes(event_start)}</Col>
        </Row>
        <Row>
        <Col>End:</Col>
        <Col>{getEventTimes(event_end)}</Col>
        </Row>
        <Row>
        <Col>Status:</Col>
        <Col><span style={statusStyles}>{status}</span></Col>
        </Row>
        <Row>
        <Col>Contact:</Col>
        <Col>{contact.full_name}</Col>
        </Row>
        <Row>
        <Col>Account:</Col>
        <Col>{account.name}</Col>
        </Row>
      </Wrapper>
    </Col>
  )
}

export default Event;
