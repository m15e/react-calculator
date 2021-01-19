import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, clickHandler } = props;
  return (
    <button type="button" onClick={() => clickHandler(buttonName)}>{buttonName}</button>
  );
};

Button.defaultProps = { buttonName: 'name me!' };

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
