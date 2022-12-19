import './App.css';
import React from 'react';
c
function App() {

  const [items, setItems] = useState([
    {name: "Bread", isPurchased: false},
    {name: "Cheese", isPurchased: true},
    {name: "Bow and Arrow", isPurchased: false}
  ]);

  const [newItem, setNewItem] = useState("");

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  };

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items];
    copyItems.push({name: newItem, isPurchased: false})
    setItems(copyItems)
    setNewItem("")
  };

  const purchaseItem = (index) => {
    const copyItems = [...items];
    copyItems[index].isPurchased = true;
    // copyItems[index] = updatedItem;
    setItems(copyItems);
  };

  const itemNodes = items.map((item, index) => {
    return  <li key={index} className={item.isPurchased ? "purchased" : "not-purchased"}>
              <span>{item.name}</span>
              {item.isPurchased ? <span className="purchased">Purchased!</span> : <button onClick={() => purchaseItem(index)}>Purchase</button>}
            </li>
  });


  return (
    <div className="App">

      <h1>Shopping List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form>
        <label htmlFor="new-item">Add a new item</label>
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput}/>
        <input type="submit" value = "Save New Item"/>
      </form>

    </div>
  );
}

export default App;
