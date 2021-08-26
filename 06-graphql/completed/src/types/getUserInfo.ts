/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserInfo
// ====================================================

export interface getUserInfo_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
}

export interface getUserInfo {
  /**
   * The currently authenticated user.
   */
  viewer: getUserInfo_viewer;
}
