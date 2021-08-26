import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo-hooks"
import { getUserInfo } from "./types/getUserInfo"

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
    <blessed-box
      draggable
      focused
      width="50%"
      height="50%"
      left="25%"
      top="25%"
      mouse
      shadow
      border={{
        type: "line"
      }}
      keys
      align="center"
      style={{
        bg: "white",
        shadow: true,
        border: {
          bg: "white",
          fg: "black"
        },
        label: {
          bg: "white",
          fg: "black"
        }
      }}
      vi
    >
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

    </blessed-box>
  )
}
