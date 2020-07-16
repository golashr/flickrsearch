import $ from 'jquery';
import { constants } from 'Utils/constants';

export const flickrImagesAPI = async (searchString: string) => {
  const flickrApiPoint = constants.BASE_URL + '&tags=' + searchString;
  return $.ajax({
    url: flickrApiPoint,
    dataType: 'jsonp',
    data: { format: 'json' },
  });
};
