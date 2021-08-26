import React from "react"
import { Route, Switch, useRouteMatch } from "react-router"
import { ListRepositories } from "./ListRepositories"
import { NewRepository } from "./NewRepository"
import { RepositoriesMain } from "./RepositoriesMain"

export const Repositories = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={RepositoriesMain} />
      <Route path={`${match.path}/new`} component={NewRepository} />
      <Route path={`${match.path}/list`} component={ListRepositories} />
    </Switch>
  )
}
