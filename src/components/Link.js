import React from 'react'

function Link(props) {
  return (
    <div>
      <div>
        {props.link.description} ({props.link.url})
      </div>
    </div>
  )
}

export default Link
