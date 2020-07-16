import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { flickrImages } from 'Containers/flickr/flickr.reducer';

export const rootReducer = (history: any) => {
  return combineReducers({
    router: connectRouter(history),
    flickrImages,
  });
};
