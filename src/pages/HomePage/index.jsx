import React from 'react'
import {Link} from 'react-router-dom';

const linkColor = {
  color: "1746A2"
}

export default function Home() {
  return (
    <>
      <h1>Top TV</h1>
      <em>All about the smaller silver screens</em>
      <ul>
          <li>
            <Link to="/shows" style={linkColor}>Explore Shows</Link>
          </li>
          <li>
            <Link to="/search" style={linkColor}>Search your favorite show</Link>
          </li>
      </ul>
    </>
  )
}
