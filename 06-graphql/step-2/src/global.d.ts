import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      box: any
      list: any
      listbar: any
      // @ts-ignore: Unreachable code error
      text: any
    }
  }
}