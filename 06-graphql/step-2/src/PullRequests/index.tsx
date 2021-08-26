import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { ListPullRequests } from "./ListPullRequests";
import { NewPullRequest } from "./NewPullRequest";
import { PullRequestsMain } from "./PullRequestsMain";

export const PullRequests = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={PullRequestsMain} />
      <Route path={`${match.path}/new`} component={NewPullRequest} />
      <Route path={`${match.path}/list`} component={ListPullRequests} />
    </Switch>
  )
}
