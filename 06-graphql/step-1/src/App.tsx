import React from "react"
import { WelcomeWindow } from "./WelcomeWindow"

export const App = () => {
  return (
    <blessed-box
      style={{
        bg: "#0000ff"
      }}
    >
        <WelcomeWindow />
    </blessed-box>
  )
}
