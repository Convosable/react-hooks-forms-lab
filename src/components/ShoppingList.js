import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";



function ShoppingList({ items, setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchByName, setSearchByName] = useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleSearchChange(e) {
    setSearchByName(e.target.value);
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory
    }
  });
  
  const itemsToDisplayByName = itemsToDisplay.filter((item) => {
    if (searchByName === "") {
      return true;
    } else if (item.name.includes(searchByName)) {
      return item.name
    } else {
      return item.name === searchByName
    }
  });

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }
  
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter search = {searchByName} category = {selectedCategory} onSearchChange = {handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplayByName.map((item) =>(
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
