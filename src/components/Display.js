import PropTypes from 'prop-types';

const Display = ({ result }) => {
  const { total, next } = result;
  const res = (total) ? `${total}` : '0';
  const displayContent = (next) ? `${next}` : res;
  return (
    <div className="display">
      <p className="display-content">{ displayContent }</p>
    </div>
  );
};

Display.defaultProps = {
  result: {
    total: '', next: '', operation: '',
  },
};

Display.propTypes = {
  result: {
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  },
};

export default Display;
