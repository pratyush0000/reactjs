import React, { useState } from 'react';

function Counter() {

    const[state,setState] = useState({count: 0, theme: "blue"});
    const count = state.count;
    const theme = state.theme;

    function decCount(){
        setState(prevState => {
            return{...prevState, count: prevState.count-1};
        })
    }

    function incCount(){
        setState(prevState=>{
            return{...prevState, count: prevState.count+1};
        })
    }



    function changeTheme(event){
        setState(prevState=>{
            return{...prevState, theme:event.target.value}
        })
    }


    const pageStyle = {
        backgroundColor: theme
    };

    return(
        <div style={pageStyle}>
            <button onClick={decCount}>-</button>
            <span>1</span>
            <button onClick={incCount}>+</button>

            <select value={theme} onChange={changeTheme}>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
        </div>
    )
  }
  
  export default Counter;