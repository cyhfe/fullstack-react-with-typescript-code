import open from "open"
import React, { useRef, useEffect, FC } from "react"
import { Panel } from "../Panel"
import { createNewRepository_createRepository_repository } from "./types/createNewRepository"

type NewIssueSuccessProps = {
  repository: createNewRepository_createRepository_repository;
}

export const NewRepositorySuccess:FC<NewIssueSuccessProps> = ({repository}) => {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current.key("o", () => open(repository.url))
  }, [])

  return (
    <Panel ref={ref} top="25%" left="center" height={10}>
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="Repository Created"
      />

      <blessed-text
        left="center"
        top={3}
        bg="white"
        fg="black"
        content="o: Open Repository in Browser"
      />
    </Panel>
  )
}
