import open from "open"
import React, { useRef, useEffect, FC } from "react"
import { Panel } from "../Panel"
import { createNewIssue_createIssue_issue } from "./types/createNewIssue"

type NewIssueSuccessProps = {
  issue: createNewIssue_createIssue_issue;
}

export const NewIssueSuccess:FC<NewIssueSuccessProps> = ({issue}) => {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current.key("o", () => open(issue.url))
  }, [])

  return (
    <Panel ref={ref} top="25%" left="center" height={10}>
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="Issue Created"
      />

      <blessed-text
        left="center"
        top={3}
        bg="white"
        fg="black"
        content="o: Open Issue in Browser"
      />
    </Panel>
  )
}
