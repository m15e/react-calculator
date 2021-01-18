import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const buttons = {
    rowOne: ['AC', '+/-', '%', '÷'],
    rowTwo: ['7', '8', '9', 'X'],
    rowThree: ['4', '5', '6', '-'],
    rowFour: ['1', '2', '3', '+'],
    rowFive: ['0', '.', '='],
  };

  const { clickHandler } = props;
  return (
    <div>
      {
        Object.keys(buttons).map(row => (
          <div key={row} className="btn-group">
            {
              buttons[row].map(button => (
                <Button
                  key={button}
                  buttonName={button}
                  clickHandler={clickHandler}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

/* <div className='btn-group'>
  <Button buttonName={el} clickHandler={props.clickHandler} />
</div>; */
