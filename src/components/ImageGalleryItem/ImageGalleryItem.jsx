import PropTypes from 'prop-types';
import { Fragment } from 'react';

const ImageGalleryItem = props => {
  const { images } = props;

  return images.map((image, index) => (
    <Fragment key={image.id}>
      <li className="imageGalleryItem">
        <a href={image.imageURL}>
          <img
            src={image.previewURL}
            alt={image.tags}
            className="imageGalleryItem-image"
          />
        </a>
      </li>
    </Fragment>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
