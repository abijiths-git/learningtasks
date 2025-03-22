import React, { useReducer } from 'react'


const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 }
      case "decrement":
        return { ...state, count: state.count - 1 }
      default:
        return {state}
    }
  }

  const [state, dispatch] = useReducer(reducer, { count:0 })

  return (
    <div className='App'>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </div>
  )
}

export default App