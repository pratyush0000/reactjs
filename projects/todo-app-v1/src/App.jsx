import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"

function App() {
  return (
  <center class='todo-container'>
    <AppName/>
    <AddToDo/>
      <div class='row'>
        <div class='col-4'>
          Buy Milk
        </div>
        <div class='col-4'>
          4/10/23
        </div>
        <div class='col-2'>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>

      <div class='row'>
        <div class='col-4'>
          Study
        </div>
        <div class='col-4'>
          4/11/24
        </div>
        <div class='col-2'>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>



  </center>
)}

export default App
