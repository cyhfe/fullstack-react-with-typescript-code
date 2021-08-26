import React, { FC, forwardRef } from "react"

type ListItem = {
  content: string
}

type ListProps = {
  top?: string | number
  left?: string | number
  right?: string | number
  bottom?: string | number
  height?: string | number
  width?: string | number
  onAction?(item: ListItem): void
  items: string[]
}

export const List = forwardRef<any, ListProps>(
  ({ onAction, items, ...rest }, ref) => {
    return (
      <blessed-list
        ref={ref}
        onAction={onAction}
        focused
        mouse
        keys
        vi
        items={items}
        style={{
          bg: "white",
          fg: "black",
          selected: {
            bg: "blue",
            fg: "white"
          },
          border: {
            type: 'line'
          }
        }}
        {...rest}
      />
    )
  }
)
