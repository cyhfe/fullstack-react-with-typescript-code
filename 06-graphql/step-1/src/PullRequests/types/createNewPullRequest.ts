/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createNewPullRequest
// ====================================================

export interface createNewPullRequest_createPullRequest_pullRequest {
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

export interface createNewPullRequest_createPullRequest {
  __typename: "CreatePullRequestPayload";
  /**
   * The new pull request.
   */
  pullRequest: createNewPullRequest_createPullRequest_pullRequest | null;
}

export interface createNewPullRequest {
  /**
   * Create a new pull request
   */
  createPullRequest: createNewPullRequest_createPullRequest | null;
}

export interface createNewPullRequestVariables {
  baseRefName: string;
  headRefName: string;
  body?: string | null;
  title: string;
  repositoryId: string;
}
