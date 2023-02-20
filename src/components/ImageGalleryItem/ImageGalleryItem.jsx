import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

const initialState = {
  imageURL: null,
};

class ImageGalleryItem extends Component {
  state = { ...initialState };

  onClickHandler = event => {
    event.preventDefault();

    const imageURL = event.currentTarget.href;

    this.setState(prevState => ({ imageURL: imageURL }));
  };

  onModalClose = () => {
    this.setState(prevState => ({ ...initialState }));
  };

  render() {
    const { images } = this.props;
    const { imageURL } = this.state;

    return (
      <>
        {images.map(image => (
          <Fragment key={image.id}>
            <li className="imageGalleryItem">
              <a href={image.imageURL} onClick={this.onClickHandler}>
                <img
                  src={image.previewURL}
                  alt={image.tags}
                  className="imageGalleryItem-image"
                />
              </a>
            </li>
          </Fragment>
        ))}
        {imageURL && (
          <Modal
            imageURL={imageURL}
            tags={'tag'}
            onModalClose={this.onModalClose}
          />
        )}
      </>
    );
  }
}

// const ImageGalleryItem = props => {
//   const { images } = props;

//   onClickHandler = event => {
//     event.preventDefault();

//     event.currentTarget;
//   };

//   return images.map((image, index) => (
//     <Fragment key={image.id}>
//       <li className="imageGalleryItem">
//         <a href={image.imageURL}>
//           <img
//             src={image.previewURL}
//             alt={image.tags}
//             className="imageGalleryItem-image"
//           />
//         </a>
//       </li>
//     </Fragment>
//   ));
// };

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
