import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import ListingsTable from './ListingsTable'
import { get_properties, update_search_value } from '../actions'


class Home extends Component {

    componentDidMount(){
        let url = 'http://localhost:8000/api/properties/?limit=10&offset=0'
        this.props.get_properties(url)
    }

    onChangeSearchValue = (e) => {
        let value = e.target.value
        this.props.update_search_value(value)
    }

    render() {
    return (
        <Container>
            <TextField
                id="search-with-subtype"
                label="Search"
                placeholder="Start, typing your subtype"
                margin="normal"
                onChange={(e) => this.onChangeSearchValue(e)}
            />
            <ListingsTable />
        </Container>
    );
    }
}

export default connect( state => state, { get_properties, update_search_value })(Home);