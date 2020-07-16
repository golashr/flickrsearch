import { all } from 'redux-saga/effects';
import { watchFlickrImagesActions } from 'Containers/flickr/flickr.saga';
export default function* startRootSaga() {
  yield all([watchFlickrImagesActions()]);
}
