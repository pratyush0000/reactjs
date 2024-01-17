function ToDoItem1(){

  let task = "buy Milk";
  let dateoftask = "4/10/23";

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

export default ToDoItem1;