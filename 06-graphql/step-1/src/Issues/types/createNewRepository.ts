/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createNewRepository
// ====================================================

export interface createNewRepository_createRepository_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
}

export interface createNewRepository_createRepository {
  __typename: "CreateRepositoryPayload";
  /**
   * The new repository.
   */
  repository: createNewRepository_createRepository_repository | null;
}

export interface createNewRepository {
  /**
   * Create a new repository.
   */
  createRepository: createNewRepository_createRepository | null;
}

export interface createNewRepositoryVariables {
  repositoryName?: string | null;
}
