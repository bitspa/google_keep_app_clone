import React from 'react'
import Logo from "./Images/Logo.jpg"
function Header() {
  return (
    <div className='header'>
        <img src ={Logo} alt="logo" height ="50px" width="70px"/>
        <h2>Keep</h2>
        </div>
  )
}
export default Header
