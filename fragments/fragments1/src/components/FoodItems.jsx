import Item from "./Item";

let FoodItems = ({itemimp}) => {
  return(
    <ul className="list-group">
      {itemimp.map((items) => (
        <Item key={items} ItemTest={items}></Item>
      ))}
    </ul>
  )
}

export default FoodItems;
