import React, { FC, useRef } from "react"
import { useEffect } from "react"

type TextBoxProps = {
  top?: string | number
  bottom?: string | number
  left?: string | number
  onSubmit(): void
}

export const TextBox: FC<TextBoxProps> = ({ onSubmit, ...rest }) => {
  return (
    <blessed-textbox
      height={1}
      style={{
        bg: "white",
        fg: "black"
      }}
      keys
      inputOnFocus
      onSubmit={onSubmit}
      {...rest}
    />
  )
}
