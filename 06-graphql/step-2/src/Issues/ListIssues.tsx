import React, { useRef } from "react"
import { Panel } from "../Panel"
import { useEffect } from "react"
import open from "open"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo-hooks"
import { listIssues } from "./types/listIssues"
import { List } from "../List"

const LIST_ISSUES = gql`
  query listIssues {
    viewer {
      issues(first: 100) {
        nodes {
          title
          url
        }
      }
    }
  }
`
export const ListIssues = () => {
  const { loading, error, data } = useQuery<listIssues>(LIST_ISSUES, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 0,
    fetchPolicy: "no-cache"
  })

  const listRef = useRef<any>()

  const issues = data?.viewer.issues.nodes

  useEffect(() => {
    listRef.current.focus()
  }, [data])

  return (
    <Panel height={10} top="25%" left="center">
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="List Issues"
      />

      <List
        ref={listRef}
        top={2}
        onAction={(el) =>
          open(
            issues?.find((issue) => issue?.title === el.content)
              ?.url || ""
          )
        }
        items={issues?.map((issue) => issue?.title || "") || []}
      />
    </Panel>
  )
}
