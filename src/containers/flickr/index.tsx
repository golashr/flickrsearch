import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Heading, InputBox, ThumbnailGallery, AppHeader, InputText } from './styles';
import { createFlickrRequest } from './flickr.actions';
import ImageList from 'Components/imageList';
import ImagePopUp from 'Components/ImagePopUp';

interface IDispatchProps {
  createFlickrRequest: (searchString: string) => void;
}

interface IProps {
  flickrImages: {
    payload: any[];
  };
}

interface IState {
  searchText: string;
  pageNumber: number;
  showPopUp: boolean;
  popUpImage: IimagePayload | null;
}

export type IFlickrProps = IProps & IDispatchProps;

class FlickrImage extends React.Component<IFlickrProps, IState> {
  constructor(props: IFlickrProps) {
    super(props);
    this.state = {
      searchText: '',
      pageNumber: 1,
      showPopUp: false,
      popUpImage: null,
    };
  }

  onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    this.setState({ searchText });
    const trimmedText = searchText.replace(/\s+$/, '');
    this.props.createFlickrRequest(trimmedText);
  };

  handleImageClick = (idx: number) => {
    this.setState({ popUpImage: this.props.flickrImages.payload[idx] });
  };

  hideImagePopup = () => {
    this.setState({ popUpImage: null });
  };

  render() {
    return (
      <>
        <AppHeader>
          <Heading>Flickr Search</Heading>
          <InputBox>
            <InputText
              type="text"
              value={this.state.searchText}
              onChange={this.onSearchInputChange}
              placeholder="Type in to search images"
            />
          </InputBox>
        </AppHeader>
        <ThumbnailGallery>
          {this.props.flickrImages.payload && (
            <div>
              <ImageList images={this.props.flickrImages.payload} onImageClick={this.handleImageClick} />
              {this.state.popUpImage && <ImagePopUp image={this.state.popUpImage} onHide={this.hideImagePopup} />}
            </div>
          )}
        </ThumbnailGallery>
      </>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    flickrImages: state.flickrImages,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFlickrRequest: (searchString: string) => {
      dispatch(createFlickrRequest(searchString));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlickrImage);
