import React from 'react'

function Form({ description, setDescription, onAddItem }) {

  function handleSubmit(e) {
    e.preventDefault() // bach nhabso refresh dyal page . 
    if(!description){ // fihalat maktbnach description 3tihom had msg 
      return alert("You Must add a value")
    }
    const newItem = {
      id: Date.now(),
      description,
      selected: false
    }
    onAddItem(newItem)
    setDescription("")

  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-controle">
        <input type="text" placeholder="Entry a task" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} />
        <button className="btn-add">Add</button>
      </div>
    </form>
  )
}

export default Form