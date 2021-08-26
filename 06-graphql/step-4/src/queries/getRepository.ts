import { gql } from "apollo-boost";

export const GET_REPOSITORY = gql`
  query getRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
    }
  }
`
