import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem1 from "./components/ToDoItem1"
import ToDoItem2 from "./components/ToDoItem2"
import "./Appy.css"

function App() {
  return (
  <center className='todo-container'>
    <AppName/>
    <AddToDo/>
    <div className='ItemsContainer'>
      <ToDoItem1/>
      <ToDoItem2/>
    </div>

  </center>
)}

export default App
