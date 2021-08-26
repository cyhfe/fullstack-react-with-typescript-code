import open from "open"
import React, { FC, useEffect, useRef } from "react"
import { Panel } from "../Panel"
import { createNewPullRequest_createPullRequest_pullRequest } from "./types/createNewPullRequest"

type NewIssueSuccessProps = {
  pullRequest: createNewPullRequest_createPullRequest_pullRequest;
}

export const NewPullRequestSuccess:FC<NewIssueSuccessProps> = ({pullRequest}) => {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current.key("o", () => open(pullRequest.url))
  }, [])

  return (
    <Panel ref={ref} top="25%" left="center" height={10}>
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="Pull Request Created"
      />

      <blessed-text
        left="center"
        top={3}
        bg="white"
        fg="black"
        content="o: Open Pull Request in the Browser"
      />
    </Panel>
  )
}
