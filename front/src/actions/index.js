import { UPDATELISTINGS} from '../constants'
import axios from 'axios';

export function get_properties(email, password, history){
  return dispatch => {
    axios
    .get('http://localhost:8000/api/properties/')
    .then((response) => {
      dispatch({
        type: UPDATELISTINGS,
        data: response
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
}