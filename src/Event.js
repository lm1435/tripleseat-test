import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

class Event extends Component {
  render () {
    const {
      event : {
        name,
        status,
        start_time_display,
        end_time_display,
        date_display,
        account : {
          name : accountName
        },
        contact: {
          full_name
        }
      }
    } = this.props

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
      textTransform: 'capitalize',
      fontWeight: '600'
    }

    let statusStyles = {
      backgroundColor: colorObj[status],
      color: 'white',
      padding: '0 1em'
    }

    const Wrapper = styled.div`
      border: 1px solid grey;
      margin: 1em 0;
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
            <Col>{date_display}</Col>
          </Row>
          <Row>
            <Col>Start:</Col>
            <Col>{start_time_display}</Col>
          </Row>
          <Row>
            <Col>End:</Col>
            <Col>{end_time_display}</Col>
          </Row>
          <Row>
            <Col>Status:</Col>
            <Col><span style={statusStyles}>{status}</span></Col>
          </Row>
          <Row>
            <Col>Contact:</Col>
            <Col>{full_name}</Col>
          </Row>
          <Row>
            <Col>Account:</Col>
            <Col>{accountName}</Col>
          </Row>
        </Wrapper>
      </Col>
    )
  }
}

export default Event;
