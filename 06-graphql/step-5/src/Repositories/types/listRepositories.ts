/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: listRepositories
// ====================================================

export interface listRepositories_viewer_repositories_nodes {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
}

export interface listRepositories_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (listRepositories_viewer_repositories_nodes | null)[] | null;
}

export interface listRepositories_viewer {
  __typename: "User";
  /**
   * A list of repositories that the user owns.
   */
  repositories: listRepositories_viewer_repositories;
}

export interface listRepositories {
  /**
   * The currently authenticated user.
   */
  viewer: listRepositories_viewer;
}
