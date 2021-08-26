import React, { useRef } from "react"
import { Panel } from "../Panel"
import { useEffect } from "react"
import open from "open"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo-hooks"
import { List } from "../List"
import { listPullRequests } from "./types/listPullRequests"

const LIST_PULL_REQUESTS = gql`
  query listPullRequests {
    viewer {
      pullRequests(first: 100) {
        nodes {
          title
          url
        }
      }
    }
  }
`
export const ListPullRequests = () => {
  const { loading, error, data } = useQuery<listPullRequests>(LIST_PULL_REQUESTS, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 0,
    fetchPolicy: "no-cache"
  })

  const listRef = useRef<any>()

  const pullRequests = data?.viewer.pullRequests.nodes

  useEffect(() => {
    listRef.current.focus()
  }, [data])

  return (
    <Panel height={10} top="25%" left="center">
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="List Pull Requests"
      />

      <List
        ref={listRef}
        top={2}
        onAction={(el) =>
          open(
            pullRequests?.find((pullRequest) => pullRequest?.title === el.content)
              ?.url || ""
          )
        }
        items={pullRequests?.map((pullRequest) => pullRequest?.title || "") || []}
      />
    </Panel>
  )
}
