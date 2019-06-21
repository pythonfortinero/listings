import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listings from './listings';

export default (history) => combineReducers({
  router: connectRouter(history),
  listings
})