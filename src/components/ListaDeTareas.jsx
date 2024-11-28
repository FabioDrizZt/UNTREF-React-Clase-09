import { useState, useReducer } from 'react'

const initialState = []

function reducer (state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }]
      // case 'delete':

      // case 'reset':

      // case 'toggle':

    default:
      throw new Error('Accion desconocida')
  }
}
export default function ListaDeTareas () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [task, setTask] = useState('')
  const handleAdd = () => {
    if (task.trim() !== '') {
      dispatch({ type: 'add', payload: task })
      setTask('')
    }
  }

  return (
    <div>
      <h1>Lista de Tareas 📝</h1>
      <input type='text' name='task' id='task' value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>+</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.map((task) =>
          <li key={task.id}>{task.text}</li>
        )}
      </ul>
    </div>
  )
}
