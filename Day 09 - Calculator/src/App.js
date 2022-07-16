import { useState } from "react";

function App() {

  const [calc, setCalc] = useState("");
  const [result , setResult] = useState ("");

  const operators = ['/', '*', '-', '+', '.'];



  const updateCalc = (value) => {

    if(operators.includes(value) && calc == '' || 
      operators.includes(value) && operators.includes(calc.slice(-1)))

      return;
      setCalc (calc + value)

      if (!operators.includes(value)) {
        setResult(eval(calc + value).toString());
      }
  }
	const calculate = () => {
		setCalc(eval(calc).toString());
	}


  

const createDigits = () => {
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(<button key={i} onClick ={() => updateCalc(i.toString())}>{i}</button>);
  }
  return digits ;
}

const deleteLast = () => {
  if (calc == '') {
      //this means => if Calc is empty then do nothing 
  }
  const value = calc.slice(0, -1);
    //  here slice, is from first element of the array to the second last element
    // which means deleting only the last
  setCalc(value);
}

return (
    <div className="App">
      <div className="calculator">
        <div className="Tabs">
          <button>Calculator</button>
          <button>Convertor</button>
        </div>
        <div className="display">
          <span>{result ? '(' + result + ')' : ''}
          {/* this means that if result is true print first code and if it is false then print the code after the colon sign  */}
          </span>{calc || 0}
        </div>
      <div className="operators">
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>
        <button onClick={() => deleteLast()}>DEL</button>


      </div>
      <div className="digits">
        {createDigits()}
        <button onClick={() => updateCalc('.')}>.</button>
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={calculate} style={{background : 'rgba(248, 190, 1, 0.794)'}}>=</button>

      </div>
      </div>
    </div>
  );

}export default App;
