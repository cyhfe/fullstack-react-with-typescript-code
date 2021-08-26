/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: listPullRequests
// ====================================================

export interface listPullRequests_viewer_pullRequests_nodes {
  __typename: "PullRequest";
  /**
   * Identifies the pull request title.
   */
  title: string;
  /**
   * The HTTP URL for this pull request.
   */
  url: any;
}

export interface listPullRequests_viewer_pullRequests {
  __typename: "PullRequestConnection";
  /**
   * A list of nodes.
   */
  nodes: (listPullRequests_viewer_pullRequests_nodes | null)[] | null;
}

export interface listPullRequests_viewer {
  __typename: "User";
  /**
   * A list of pull requests associated with this user.
   */
  pullRequests: listPullRequests_viewer_pullRequests;
}

export interface listPullRequests {
  /**
   * The currently authenticated user.
   */
  viewer: listPullRequests_viewer;
}
