import './App.css';
import React , {useState} from 'react';
function App() {

const [textInput , setInputText] = useState ("");
const [numberInput , setInputNumber] = useState ("");
const [items , setItems ] = useState ([]);

const addItem = () => {
  setItems(textInput)
}


  return (
    <div className="App">
        <div className="heading">
          <h2>Expense Tracker App </h2>
        </div>

    {/* Balance Box */}

    <div className="BalanceBox">
      <h3>YOUR BALANCE </h3>
      <h1>₹15</h1>
    </div>


    {/* Income & Expense Div */}

    <div className="trnasaction-box">
      <div className="income">
        <h3>INCOME</h3>
        <h3>20</h3>
      </div>
      <div class="vl"></div>
      <div className="expense">
      <h3>EXPENSE</h3>
      <h3 className='expense-head'>20</h3>
      </div>
    </div>

    {/* History Section */}

    <h2>History </h2>
    <div className='expense-item'>
      <h3>Toilet Paper</h3>
      <h3>₹-5</h3>
    </div>
    <div className='expense-item'>
      <h3>Freelance </h3>
      <h3>₹+15</h3>
    </div>

    {/* ADD A TRANSACTION */}

    <h2>Add new transaction</h2>
    <div className="titleinput">
      <input type="text" 
      placeholder='e.g, Toilet Paper' 
      value={textInput}
      onChange = {(e) => setInputText(e.target.value)} />
    </div>
    <div className="valueinput">
      <input type="number" placeholder='enter Amount' value={numberInput} onChange = {(e) => setInputNumber(e.target.value)}  />
    </div>
    <div className="addbutton">
      <button 
      type='button'
      onClick={addItem}>
        Add Transaction </button>
    </div>
    </div>
  );
}

export default App;
