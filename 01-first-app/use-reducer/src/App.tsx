import React, { useReducer } from "react"

interface State {
  count: number
}

type Action =
  | {
      type: "increment"
    }
  | {
      type: "decrement"
    }

const increment = (): Action => ({ type: "increment" })
const decrement = (): Action => ({ type: "decrement" })

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      <button onClick={() => dispatch(increment())}>
        +
      </button>
    </>
  )
}

export default App
