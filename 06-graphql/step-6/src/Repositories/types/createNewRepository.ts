/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RepositoryVisibility } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createNewRepository
// ====================================================

export interface createNewRepository_createRepository_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  id: string;
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
  name: string;
  description: string;
  visibility: RepositoryVisibility;
}
