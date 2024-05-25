import React, {useState} from 'react';




function App(){

  const[state, setState] = useState({count:4, theme:"orange"})
  const count = state.count;
  const theme=state.theme;

  function decCount(){
    setState(prevCount => {
      return{...prevCount, count: prevCount.count-1}
    });
  }

  function incCount(){
    setState(prevCount => {
      return{...prevCount, count: prevCount.count+1}
    });
  }

  return(
    <>
      <button onClick={decCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incCount}>+</button>
    </>
  )
}

export default App;