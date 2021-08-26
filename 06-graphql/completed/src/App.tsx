import React, { useState } from "react"
import { WelcomeWindow } from "./WelcomeWindow"
import { Switch, Route, useHistory } from "react-router"
import { Issues } from "./Issues"
import { Repositories } from "./Repositories"
import { PullRequests } from "./PullRequests"

export const App = () => {
  const history = useHistory()

  return (
    <blessed-box
      style={{
        bg: "#0000ff"
      }}
    >
      <blessed-listbar
        height={1}
        items={{
          Quit: {
            keys: "q"
          },
          Issues: {
            keys: "i",
            callback: () => history.push("/issues")
          },
          Repositories: {
            keys: "r",
            callback: () => history.push("/repositories")
          },
          "Pull Requests": {
            keys: "p",
            callback: () => history.push("/pull-requests")
          }
        }}
        style={{
          bg: "grey",
          height: 1
        }}
      />
      <Switch>
        <Route exact path="/" component={WelcomeWindow} />
        <Route path="/issues" component={Issues} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/pull-requests" component={PullRequests} />
      </Switch>
    </blessed-box>
  )
}
