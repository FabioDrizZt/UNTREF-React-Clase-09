import { useReducer } from 'react'

const initialState = { count: 0 }

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      throw new Error('Accion desconocida')
    // return state
  }
}
export default function Counter () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='card'>
      <p>count is {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        0
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>

    </div>
  )
}
