import PropTypes from 'prop-types';

const Display = ({ result }) => {
  const { total, next, operation } = result;
  // console.log(data.total, data.next, data.operation);
  console.log('from display');
  console.log(result);
  return (
    <div className="display">
      <p>{`total: ${total}`}</p>
      <p>{`next: ${next}`}</p>
      <p>{`op: ${operation}`}</p>
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
