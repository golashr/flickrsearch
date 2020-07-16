import { call, put, takeLatest } from 'redux-saga/effects';
import { FLICKR_IMAGE_REQUEST } from './flickrActionTypes';
import { flickrImagesAPI } from './flickr.api';
import { createFlickrRequestSuccess, createFlickrRequestFailed } from './flickr.actions';

export function* watchFlickrImagesActions() {
  yield takeLatest(FLICKR_IMAGE_REQUEST, flickrImagesRequest);
}

export function* flickrImagesRequest(data: { type: string; searchString: string }) {
  try {
    const response = yield call(flickrImagesAPI, data.searchString);
    yield put(createFlickrRequestSuccess(response.items));
    console.log('RESPONSE    ', response);
  } catch (error) {
    console.log('ERROR    ', error);
    yield put(createFlickrRequestFailed(error));
  }
}
