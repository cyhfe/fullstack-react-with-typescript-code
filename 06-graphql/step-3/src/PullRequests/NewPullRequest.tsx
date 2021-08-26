import { gql } from "apollo-boost"
import React, { useState } from "react"
import { useApolloClient, useMutation } from "react-apollo-hooks"
import { Field } from "../Field"
import { Form, FormValues } from "../Form"
import { Panel } from "../Panel"
import {
  createNewPullRequest,
  createNewPullRequestVariables,
  createNewPullRequest_createPullRequest_pullRequest
} from "./types/createNewPullRequest"
import { getRepository, getRepositoryVariables } from "../queries/types/getRepository"
import { GET_REPOSITORY } from "../queries/getRepository"
import { NewPullRequestSuccess } from "./NewPullRequestSuccess"

const CREATE_PULL_REQUEST = gql`
  mutation createNewPullRequest(
    $baseRefName: String!
    $headRefName: String!
    $body: String
    $title: String!
    $repositoryId: ID!
  ) {
    createPullRequest(
      input: {
        title: $title
        body: $body
        repositoryId: $repositoryId
        baseRefName: $baseRefName
        headRefName: $headRefName
      }
    ) {
      pullRequest {
        title
        url
      }
    }
  }
`

export const NewPullRequest = () => {
  const [
    pullRequest,
    setPullRequest
  ] = useState<createNewPullRequest_createPullRequest_pullRequest | null>()
  const [createPullRequest] = useMutation<
    createNewPullRequest,
    createNewPullRequestVariables
  >(CREATE_PULL_REQUEST)

  const client = useApolloClient()

  const onSubmit = async (values: FormValues) => {
    const [repo, title, body, baseRefName, headRefName] = values.textbox
    const [owner, name] = repo.split("/")

    const { data } = await client.query<
      getRepository,
      getRepositoryVariables
    >({
      query: GET_REPOSITORY,
      variables: {
        owner,
        name
      }
    })

    if (!data || !data.repository) {
      return
    }

    const result = await createPullRequest({
      variables: {
        title,
        body,
        repositoryId: data.repository.id,
        baseRefName,
        headRefName
      }
    })

    setPullRequest(result.data?.createPullRequest?.pullRequest)
  }

  if (pullRequest) {
    return <NewPullRequestSuccess pullRequest={pullRequest} />
  }

  return (
    <Panel top="25%" left="center" height={12}>
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="New Pull Request"
      />
      <Form onSubmit={onSubmit}>
        {(triggerSubmit) => {
          return (
            <>
              <Field
                top={0}
                label="Repo: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={1}
                label="Title: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={2}
                label="Body: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={3}
                label="Base: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={4}
                label="Head: "
                onSubmit={triggerSubmit}
              />
            </>
          )
        }}
      </Form>
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        bottom={1}
        content="Tab: Next Field"
      />
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        bottom={0}
        content="Enter: Submit"
      />
    </Panel>
  )
}
