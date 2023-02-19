import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit}) {
  const [formCategory, setFormCategory] = useState("Produce")
  const [inputName, setInputName] = useState("")


  function handleFormCategoryChange(e) {
    setFormCategory(e.target.value)
  }
  
  function handleFormNameChange(e) {
    setInputName(e.target.value)
  }
  function handelFormSubmit(e) {
    e.preventDefault()
    onItemFormSubmit({category: formCategory, name: inputName, id: uuid()})
  }
  
  
  return (
    <form onSubmit = {handelFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange = {handleFormNameChange} value = {inputName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange = {handleFormCategoryChange} value = {formCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;