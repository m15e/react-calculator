import PropTypes from 'prop-types';

const Button = props => {
  const {
    buttonName, clickHandler, color, wide,
  } = props;
  return (
    <button style={color ? { backgroundColor: '#f39148' } : {}} type="button" className={wide ? 'wide' : ''} onClick={() => clickHandler(buttonName)}>{buttonName}</button>
  );
};

Button.defaultProps = { buttonName: 'name me!', color: false, wide: 'inherit' };

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
