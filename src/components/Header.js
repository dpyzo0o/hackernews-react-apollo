import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

function Header() {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black fw7 mr1">
          Hacker News
        </Link>
        <Link to="/create" className="ml1 no-underline black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link to="/create" className="ml1 no-underline black">
          submit
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Header)
