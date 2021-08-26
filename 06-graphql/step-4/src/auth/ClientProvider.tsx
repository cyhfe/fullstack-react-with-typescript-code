import React, { FC, PropsWithChildren } from "react"
import { useState } from "react"
import { useEffect } from "react"
import * as keytar from "keytar"
import { getCode } from "./getCode"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo-hooks"

const GITHUB_BASE_URL = "https://api.github.com/graphql"

export const ClientProvider: FC<PropsWithChildren<{}>> = ({
  children
}) => {
  const [token, setToken] = useState<string>()

  useEffect(() => {
    const getToken = async () => {
      let key: any = await keytar.getPassword(
        "github",
        process.env.CLIENT_ID!
      )
      if (!key) {
        key = await getCode()
      }
      setToken(key)
    }
    getToken()
  }, [])

  if (!token) {
    return <>Loading...</>
  }

  const client = new ApolloClient({
    uri: GITHUB_BASE_URL,
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    }
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
