function ToDoItem2(){

  let task = "Study";
  let dateoftask = "4/10/24";

  return (
    <div class='container'>
      <div class='row edit-row'>
        <div class='col-4'>{task}</div>
        <div class='col-4'>{dateoftask}</div>
        <div class='col-2'>
          <button type="button" class="btn btn-danger edit-button">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem2;