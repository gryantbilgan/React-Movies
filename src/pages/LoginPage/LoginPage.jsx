import React from 'react'
import { useState } from 'react';

export default function LoginPage(props) {

    const [inputValue, setInputValue] = useState("")

    const handleChange= (event) => {
        setInputValue(event.target.value)
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setUser(inputValue)
    }
    
    //   const handleLogout = () => {
    //     setUser(null)
    //   }

  return (
    <div>
        <h2>Enter Your Username Turkey</h2>
        <form onSubmit={handleSubmit}>
            <label>UserTurkey</label>
            <div>
                <input 
                    type='text'
                    placeholder="Gobble Gobble Y'all"
                    onChange={handleChange}
                />
            </div>
            <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}
