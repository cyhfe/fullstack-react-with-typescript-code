import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo-hooks"
import { getUserInfo } from "./types/getUserInfo"
import { Panel } from "../Panel"

const GET_USER_INFO = gql`
  query getUserInfo {
    viewer {
      name
      bio
    }
  }
`

export const WelcomeWindow = () => {
  const { loading, data } = useQuery<getUserInfo>(GET_USER_INFO, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 0,
    fetchPolicy: "no-cache"
  })

  if (loading) {
    return null
  }

  return (
    <Panel height={10} top="25%" left="center">
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="Welcome to Github Manager"
      />
      <blessed-text
        top={3}
        bg="white"
        fg="black"
        content={`Name: ${data?.viewer.name}`}
      />
      <blessed-text
        top={5}
        bg="white"
        fg="black"
        content={`Bio: ${data?.viewer.bio}`}
      />

    </Panel>
  )
}
