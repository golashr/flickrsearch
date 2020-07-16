import update from 'immutability-helper';
import { FLICKR_IMAGE_REQUEST_SUCCESS, FLICKR_IMAGE_REQUEST_FAILED } from './flickrActionTypes';

export const flickrImages = (state = {}, action: any) => {
  switch (action.type) {
    case FLICKR_IMAGE_REQUEST_SUCCESS: {
      return update(state, { $set: action });
    }
    case FLICKR_IMAGE_REQUEST_FAILED: {
      return update(state, { $set: action });
    }
    default: {
      return state;
    }
  }
};
