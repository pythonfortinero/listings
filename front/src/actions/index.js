import { UPDATELISTINGS} from '../constants'
import axios from 'axios';

export function get_properties(url){
  return dispatch => {
    axios
    .get(url)
    .then((response) => {
      dispatch({
        type: UPDATELISTINGS,
        data: {...response.data, current_url: url}
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
}


export function update_search_value(value){
  return dispatch => {
    if (value.length > 2) {
      let url = 'http://localhost:8000/api/properties/?search=' + value
      axios
      .get(url)
      .then((response) => {
        dispatch({
          type: UPDATELISTINGS,
          data: {
            ...response.data,
            current_url: url,
            search_value: value
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    } else if (value === '') {
      let url = 'http://localhost:8000/api/properties/?limit=10&offset=0'
      axios
      .get(url)
      .then((response) => {
        dispatch({
          type: UPDATELISTINGS,
          data: {
            ...response.data,
            current_url: url,
            search_value: value
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    } else {
      dispatch({
        type: UPDATELISTINGS,
        data: {search_value: value}
      });
    }
  }
}