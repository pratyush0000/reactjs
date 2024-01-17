function AddToDo(){
  return <div class='container text-center'>
  <div class='row edit-row'>
    <div class='col-4'>
      <input type='text' placeholder="Enter task"/>
    </div>
    <div class='col-4'>
      <input type="date"></input>
    </div>
    <div class='col-2'>
      <button type="button" class="btn btn-success edit-button">Add</button>
    </div>
  </div>
  </div>
}

export default AddToDo;