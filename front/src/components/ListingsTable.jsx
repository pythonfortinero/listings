import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { get_properties } from '../actions'


class ListingsTable extends Component {

  onChangePage = (event, page) => {
    let urlparams = new URLSearchParams(this.props.listings.current_url)
    let offset = parseFloat(parseInt(urlparams.get('offset')))
    if (isNaN(offset))
        offset = 0
    let current_page = offset / 10
    if (page > current_page)
      this.props.get_properties(this.props.listings.next)
    else
      this.props.get_properties(this.props.listings.previous)
  }

  getTableRow = (row) => {
    let highlight_style = parseInt(row.total_area) === 0 ?
      {backgroundColor: 'red', color: 'white'} : {}
    return (
      <TableRow key={row.id}>
        <TableCell component="th" scope="row" style={highlight_style}>
          {row.id}
        </TableCell>
        <TableCell style={highlight_style}>{
          row.location.length > 35 ?
            row.location.substring(0, 35):
            row.location
         }</TableCell>
        <TableCell align="right" style={highlight_style}>{row.price}</TableCell>
        <TableCell style={highlight_style}>{row.subtype}</TableCell>
        <TableCell style={highlight_style}>{
            row.title.length > 35 ?
            row.title.substring(0, 35):
            row.title
         }</TableCell>
         <TableCell align="right" style={highlight_style}>{row.total_area}</TableCell>
        <TableCell align="right" style={highlight_style}>{row.price_per_square}</TableCell>
      </TableRow>
    )
  }

  render(){
    console.log(this.props.listings)
    let page = 0
    if (this.props.listings.current_url !== null) {
      let urlparams = new URLSearchParams(this.props.listings.current_url)
      let offset = parseFloat(parseInt(urlparams.get('offset')))
      if (isNaN(offset))
        offset = 0
      page = offset / 10
    }
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Location</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell>Subtype</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Total area</TableCell>
              <TableCell align="right">Price per square</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.listings.results.map(row => (
              this.getTableRow(row)
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10]}
                colSpan={3}
                count={this.props.listings.count}
                rowsPerPage={10}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'Rows per page' },
                  native: true,
                }}
                onChangePage={this.onChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    ); 
  }
}

export default connect( state => state, { get_properties })(ListingsTable);
