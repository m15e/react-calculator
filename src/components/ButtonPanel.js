import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="btn-group">
      {['AC', '+/-', '%', '÷'].map(el => (<Button key={el[0]} buttonName={el} />))}
    </div>
    <div className="btn-group">
      {['7', '8', '9', 'X'].map(el => (<Button key={el[0]} buttonName={el} />))}
    </div>
    <div className="btn-group">
      {['4', '5', '6', '-'].map(el => (<Button key={el[0]} buttonName={el} />))}
    </div>
    <div className="btn-group">
      {['1', '2', '3', '+'].map(el => (<Button key={el[0]} buttonName={el} />))}
    </div>
    <div className="btn-group">
      {['0', '.', '='].map(el => (<Button key={el[0]} buttonName={el} />))}
    </div>
  </div>
);

export default ButtonPanel;
