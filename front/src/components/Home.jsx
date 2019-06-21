import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import ListingsTable from './ListingsTable'


class Home extends Component {

  render() {
    return (
      <Container maxWidth="sm">
        <div>Match</div>
        <ListingsTable />
      </Container>
    );
  }
}

export default connect( state => state, {})(Home);