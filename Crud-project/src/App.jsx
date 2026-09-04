import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState(["html", "css", "js", "react"])
  const [text, setText] = useState("")
  const [editIndex, setEditIndex] = useState(null) // null = not editing

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === "") return

    if (editIndex !== null) {
      // UPDATE: replace item at editIndex with new text
      const updated = items.map((item, i) =>
        i === editIndex ? text : item
      )
      setItems(updated)
      setEditIndex(null) // reset editing mode
    } else {
      // CREATE: add new item
      setItems([...items, text])
    }

    setText("") // clear input either way
  }

  const handleEdit = (index) => {
    setEditIndex(index)      // remember which item is being edited
    setText(items[index])    // pre-fill input with that item's value
  }

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index))

    // Edge case: if you delete the item currently being edited,
    // cancel edit mode so the form doesn't get stuck
    if (editIndex === index) {
      setEditIndex(null)
      setText("")
    }
  }

  const handleCancelEdit = () => {
    setEditIndex(null)
    setText("")
  }

  return (
    <>
      <h1>Todo list items</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>edit</button>
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='+ create'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">{editIndex !== null ? "update" : "submit"}</button>
        {editIndex !== null && (
          <button type="button" onClick={handleCancelEdit}>cancel</button>
        )}
      </form>
    </>
  )
}

export default App