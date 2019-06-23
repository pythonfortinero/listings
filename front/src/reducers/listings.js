import {
  UPDATELISTINGS
} from '../constants';

const defaultListings = {
	offset: 0,
	results: [],
	count: 0,
	previous: null,
	current_url: null,
	search_value: ''
};

const listings = (state = defaultListings, action) => {
  switch(action.type){
  	case UPDATELISTINGS:
  		return Object.assign({}, state, action.data)
    default:
    	return Object.assign({}, state);
  }
}

export default listings;