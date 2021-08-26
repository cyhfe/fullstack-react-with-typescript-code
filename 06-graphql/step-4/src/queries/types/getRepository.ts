/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRepository
// ====================================================

export interface getRepository_repository {
  __typename: "Repository";
  id: string;
}

export interface getRepository {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: getRepository_repository | null;
}

export interface getRepositoryVariables {
  owner: string;
  name: string;
}
