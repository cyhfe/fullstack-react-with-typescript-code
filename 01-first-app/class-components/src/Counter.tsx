import React from "react"

type CounterState = {
  count: number
}

export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  }

  private increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  private decrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
  }

  render() {
    return (
      <>
        <p>
          Count: {this.state.count}
        </p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}
