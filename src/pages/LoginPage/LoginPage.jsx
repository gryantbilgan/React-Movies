import React from 'react'
import { useState } from 'react';
import './LoginPage.css'

export default function LoginPage(props) {

    const [inputValue, setInputValue] = useState("")

    const handleChange= (event) => {
        setInputValue(event.target.value)
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setUser(inputValue)
    }

  return (
    <div className='Login-Screen'>
      <div className='login-container'>
        <h2 className='login-title'>Enter Your Username Below</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label>User Name</label>
            <input 
              type='text'
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='login-button'>Sign In</button>
        </form>
      </div>
    </div>
  )
}
