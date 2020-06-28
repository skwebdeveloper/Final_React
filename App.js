import React, { useState } from 'react';
import './index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [inputList, setInputList] = useState(' ');
    const [ items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value)
    }
    const listOfItems = () => {
        setItems((oldItems) =>{
            return[...oldItems, inputList]
        })
        setInputList("")
    }
    const deleteitems = ()=>{
        alert("Delete")
    }
    return (
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <h1>Yelling</h1>

                    <input type="text"
                        placeholder="Enter your task"
                        onChange={itemEvent}
                        value={inputList}
                    />

                    <button onClick={listOfItems}> Hit </button>
                    <ol className="design">
                       { items.map((itemval) => {
                         return(
                             <React.Fragment>
                             <div className="todo_style">
                         <i onClick={deleteitems} class="fa fa-times" aria-hidden="true" />    
                        <li className="desk">{itemval}</li>
                        </div>
                         </React.Fragment>
                         )
                        })}
                    </ol>

                </div>
            </div>
        </React.Fragment>
    )
}



export default App;