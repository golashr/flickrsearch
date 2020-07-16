import React from 'react';
import { formatUrl } from 'Utils/index';
import { ImagePopContainer } from './styles';

interface IProps {
  image: IimagePayload;
  onHide: () => void;
}

export default class PopUpImage extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  onImageClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  render() {
    return (
      <React.Fragment>
        <img
          src={formatUrl('_m', '', this.props.image.media.m)}
          alt={this.props.image.title}
          onClick={this.onImageClick}
          style={{ zIndex: 999, position: 'absolute', top: '10%', left: '30%' }}
        />
        <ImagePopContainer onClick={this.props.onHide} />
      </React.Fragment>
    );
  }
}
