import PropTypes from 'prop-types';

const Button = props => {
  const { onClick } = props;

  return (
    <>
      <button
        className="button"
        name="loadMore"
        type="button"
        onClick={onClick}
      >
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
