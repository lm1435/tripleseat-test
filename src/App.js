import React, { Component } from 'react';
import Header from './Header';
import Events from './Events';
import Api from './Api';

class App extends Component {
  constructor()  {
    super();
    let events = Api.getEvents();
    this.state = {
      events,
      filteredEvents: events,
      searchTerm: ''
    };

  }
  matchedTerms = (searchTerm) => (event) => event.normalized_name.includes(searchTerm)
  onSearchChange = (e) => {
    let searchTermLowerCase = e.target.value.toLowerCase();
    let filteredEvents = 
      this.state.events
        .filter(this.matchedTerms(searchTermLowerCase))
        .slice(0,50); 
        // TODO show more
        // two possible solutions add pagination OR only search on click.
  
    this.setState({
      searchTerm: e.target.value,
      filteredEvents
    });
  }

  render() {
    const { filteredEvents, searchTerm } = this.state;
    return (
      <div>
        <Header searchTerm={searchTerm} onSearchChange={this.onSearchChange}>Weekend Project</Header>
        <Events events={filteredEvents} />
      </div>
    );
  }
}

export default App;
