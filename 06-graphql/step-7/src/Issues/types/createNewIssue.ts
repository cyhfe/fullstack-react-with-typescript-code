/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createNewIssue
// ====================================================

export interface createNewIssue_createIssue_issue {
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

export interface createNewIssue_createIssue {
  __typename: "CreateIssuePayload";
  /**
   * The new issue.
   */
  issue: createNewIssue_createIssue_issue | null;
}

export interface createNewIssue {
  /**
   * Creates a new issue.
   */
  createIssue: createNewIssue_createIssue | null;
}

export interface createNewIssueVariables {
  title?: string | null;
  body?: string | null;
  repository?: string | null;
}
