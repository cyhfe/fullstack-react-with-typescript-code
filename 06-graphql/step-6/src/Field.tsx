import React from "react"
import { FC } from "react"
import { TextBox } from "./TextBox"
import { forwardRef } from "react"

type FieldProps = {
  label: string
  top?: number | string
  onSubmit(): void
}

export const Field: FC<FieldProps> = ({label, top, onSubmit}) => {
  return (
    <>
      <blessed-text
        width={label.length}
        content={label}
        style={{
          bg: "white",
          fg: "black"
        }}
        top={top}
      />
      <TextBox top={top} left={label.length} onSubmit={onSubmit} />
    </>
  )
}
