import { gql } from "apollo-boost"
import React, { useState } from "react"
import { useMutation } from "react-apollo-hooks"
import { Field } from "../Field"
import { Form, FormValues } from "../Form"
import { Panel } from "../Panel"
import { NewRepositorySuccess } from "./NewRepositorySuccess"
import { createNewRepository_createRepository_repository, createNewRepository, createNewRepositoryVariables } from "./types/createNewRepository"
import { RepositoryVisibility } from "../types/graphql-global-types"

const CREATE_REPOSITORY = gql`
  mutation createNewRepository(
    $name: String!
    $description: String!
    $visibility: RepositoryVisibility!
  ) {
    createRepository(
      input: {
        name: $name
        description: $description
        visibility: $visibility
      }
    ) {
      repository {
        name
        url
        id
      }
    }
  }
`

export const NewRepository = () => {
  const [
    repository,
    setRepository
  ] = useState<createNewRepository_createRepository_repository | null>()
  const [createrepository] = useMutation<
    createNewRepository,
    createNewRepositoryVariables
  >(CREATE_REPOSITORY)

  const onSubmit = async (values: FormValues) => {
    const [name, description] = values.textbox

    const result = await createrepository({
      variables: {
        name,
        description,
        visibility: RepositoryVisibility.PUBLIC
      }
    })

    setRepository(result.data?.createRepository?.repository)
  }

  if (repository) {
    return <NewRepositorySuccess repository={repository} />
  }

  return (
    <Panel top="25%" left="center" height={10}>
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="New repository"
      />
      <Form onSubmit={onSubmit}>
        {(triggerSubmit) => {
          return (
            <>
              <Field
                top={0}
                label="Name: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={1}
                label="Description: "
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
