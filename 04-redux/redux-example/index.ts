import { createStore } from "redux"

type Action = {
  type: "SET_VALUE",
  payload: string
}


function reducer(state = "", action: Action) {
  switch (action.type) {
    case "SET_VALUE":
      return action.payload
    default:
      return state
  }
}

const store = createStore(reducer, "Initial Value")

store.subscribe(() => {
  const state = store.getState()
  console.log(state)
})

store.dispatch({
  type: "SET_VALUE",
  payload: "New value"
})

const setValue = (value) => ({
  type: "SET_VALUE",
  payload: value
})

