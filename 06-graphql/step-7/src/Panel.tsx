import React, { PropsWithChildren, FC } from "react"
import { forwardRef } from "react"

type PanelProps = {
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  width?: number | string
  height?: number | string
}

export const Panel = forwardRef<any, PropsWithChildren<PanelProps>>(
  ({ children, ...rest }, ref) => {
    return (
      <blessed-box
        ref={ref}
        draggable
        focused
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
        {...rest}
      >
        {children}
      </blessed-box>
    )
  }
)
