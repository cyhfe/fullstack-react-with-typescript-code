import React, { useRef } from "react"
import { Panel } from "../Panel"
import { useEffect } from "react"
import open from "open"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo-hooks"
import { List } from "../List"
import { listRepositories } from "./types/listRepositories"

const LIST_REPOSITORIES = gql`
  query listRepositories {
    viewer {
      repositories(first: 100) {
        nodes {
          name
          url
        }
      }
    }
  }
`
export const ListRepositories = () => {
  const { loading, error, data } = useQuery<listRepositories>(LIST_REPOSITORIES, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 0,
    fetchPolicy: "no-cache"
  })

  const listRef = useRef<any>()

  const issues = data?.viewer.repositories.nodes

  useEffect(() => {
    listRef.current.focus()
  }, [data])

  return (
    <Panel height={10} top="25%" left="center">
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="List Repositories"
      />

      <List
        ref={listRef}
        top={2}
        onAction={(el) =>
          open(
            issues?.find((issue) => issue?.name === el.content)
              ?.url || ""
          )
        }
        items={issues?.map((issue) => issue?.name || "") || []}
      />
    </Panel>
  )
}
