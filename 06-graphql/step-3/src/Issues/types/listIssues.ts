/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: listIssues
// ====================================================

export interface listIssues_viewer_issues_nodes {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * The HTTP URL for this issue
   */
  url: any;
}

export interface listIssues_viewer_issues {
  __typename: "IssueConnection";
  /**
   * A list of nodes.
   */
  nodes: (listIssues_viewer_issues_nodes | null)[] | null;
}

export interface listIssues_viewer {
  __typename: "User";
  /**
   * A list of issues associated with this user.
   */
  issues: listIssues_viewer_issues;
}

export interface listIssues {
  /**
   * The currently authenticated user.
   */
  viewer: listIssues_viewer;
}
