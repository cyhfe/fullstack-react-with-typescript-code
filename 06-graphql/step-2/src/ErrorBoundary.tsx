import React from "react"

type ErrorBoundaryState = {
  hasError: boolean
  errorMessage?: string
}

export class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryState
> {
  constructor(props: {}) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <blessed-box
          style={{
            bg: "#0000ff"
          }}
        >
          <blessed-box
            draggable
            focused
            width="50%"
            height="50%"
            left="25%"
            top="25%"
            mouse
            shadow
            border={{
              type: "line"
            }}
            keys
            align="center"
            style={{
              bg: "white",
              shadow: true,
              border: {
                bg: "white",
                fg: "black"
              },
              label: {
                bg: "white",
                fg: "black"
              }
            }}
            vi
          >
            <blessed-text
              left="center"
              bg="white"
              fg="black"
              content="Something went wrong"
            />
            <blessed-text
              bg="lightgrey"
              fg="black"
              top={3}
              content={this.state.errorMessage}
            />
          </blessed-box>
        </blessed-box>
      )
    }

    return this.props.children
  }
}
