import React from "react";
import { useState } from "react";

function TaskHandler(){

  const [inputData, setInputData ] = useState("");
  const [items , setItems ] = useState([]);

  const addItem = (e) => {
    if(!inputData){

    }
    else {
      setItems([...items, inputData]);
      setInputData("");
    }

  } 
        return(
            <div>
        <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={inputData}
          onChange = {(e) => setInputData(e.target.value)}
        />
        <button onClick={addItem}
        className="btn btn_danger btn__lg"
        type="button"
        >
          Add Task 
        </button>
      </form>
            </div>
        )
    }


export default TaskHandler ;