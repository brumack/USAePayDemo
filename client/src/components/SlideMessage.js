import React from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const SlideMessage = props => {
  const { open, children } = props
  return (
    <SlideDown>
      {open ? children : null}
    </SlideDown>
  )
}

export default SlideMessage
