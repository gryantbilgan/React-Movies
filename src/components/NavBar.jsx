import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ user }) {
  return (
    <div className='NavBar'>
            <div>
                <p>Welcome {user}!</p>
                <nav>
                    <Link to="/">Movies</Link>
                    &nbsp; | &nbsp;
                    <Link to="/actors">Actors</Link>
                </nav>
            </div>
    </div>
  )
}
