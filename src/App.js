import { useReducer } from 'react';
import './styles.css'
import Digitbutton from './digitbutton';

export const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose_operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type,payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT: 
     return{ ...state,
      currentOperand: `${state.currentOperand || ""} ${payload.digit}`,
     }
      default:
        break
    }

  }

  
  function App() {
    
    
    const [{currentOperand,previousOperand,operation}, dispatch] = useReducer(reducer, {})
  
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
          <div className="current-operand">{currentOperand}</div>
          </div>
       <button className="span-two">AC</button>
       <button>DEL</button>
       <button>/</button>
       <Digitbutton digit="1" dispatch={dispatch} />
       <Digitbutton digit="2" dispatch={dispatch} />
       
       <button>3</button>
       <button>*</button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button>+</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button>-</button>
       <button>0</button>
       <button>.</button>
       <button className="span-two">=</button>

      </div>
    
  );
}

export default App;
