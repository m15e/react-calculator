import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, clickFunc } = props;
  return (
    <button type="button" onClick={() => clickFunc(buttonName)}>{buttonName}</button>
  );
};

Button.defaultProps = { buttonName: 'name me!' };

Button.propTypes = {
  buttonName: PropTypes.string,
  clickFunc: PropTypes.func.isRequired,
};

export default Button;
