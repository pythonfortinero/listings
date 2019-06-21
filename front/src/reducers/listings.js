import {
  UPDATELISTINGS
} from '../constants';

const defaultListings = {
  data: []
};

const listings = (state = defaultListings, action) => {
  switch(action.type){
  	case UPDATELISTINGS:
  		return Object.assign(state, action.data)
    default:
      return Object.assign({}, state);
  }
}

export default listings;