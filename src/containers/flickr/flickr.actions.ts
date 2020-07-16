import { FLICKR_IMAGE_REQUEST, FLICKR_IMAGE_REQUEST_SUCCESS, FLICKR_IMAGE_REQUEST_FAILED } from './flickrActionTypes';

export const createFlickrRequest = (searchString: string) => ({
  type: FLICKR_IMAGE_REQUEST,
  searchString,
});

export const createFlickrRequestSuccess = (payload: any) => {
  return {
    type: FLICKR_IMAGE_REQUEST_SUCCESS,
    payload,
  };
};

export const createFlickrRequestFailed = (payload: any) => {
  return {
    type: FLICKR_IMAGE_REQUEST_FAILED,
    payload,
  };
};
