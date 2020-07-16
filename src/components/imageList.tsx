import React from 'react';
import { ULList, LIList, Author, Tags } from './styles';
import { formatUrl } from 'Utils/index';

interface IProps {
  images: any[];
  onImageClick: (idx: number) => void;
}

interface IState {}

class ImageList extends React.Component<IProps, IState> {
  renderImageItem = (image: any, idx: number) => {
    return (
      // tslint:disable-next-line: jsx-no-lambda
      <LIList key={idx} onClick={() => this.props.onImageClick(idx)}>
        <img src={formatUrl('_m', '_t', image.media.m)} alt={image.title} />
        <Author>
          <strong>Author: </strong>
          {image.author}
        </Author>
        <Tags>
          <strong>Tags: </strong>
          {image.tags}
        </Tags>
      </LIList>
    );
  };

  render() {
    return (
      <React.Fragment>
        <ULList>{this.props.images.map((image, idx) => this.renderImageItem(image, idx))}</ULList>
      </React.Fragment>
    );
  }
}

export default ImageList;
