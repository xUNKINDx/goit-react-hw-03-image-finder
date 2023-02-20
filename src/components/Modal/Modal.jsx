import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  onOverlayClick = event => {
    const { onModalClose } = this.props;
    onModalClose();
  };

  onKeydown = event => {
    if (event.key === 'Escape') {
      const { onModalClose } = this.props;
      onModalClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
    document.body.classList.add('no-scroll');
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
    document.body.classList.remove('no-scroll');
  }

  render() {
    const { imageURL, tags } = this.props;

    return (
      <>
        <div className="overlay" onClick={this.onOverlayClick}>
          <div className="modal">
            <img src={imageURL} alt={tags} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
