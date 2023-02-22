import { AccessTime, AccountCircle, HelpOutline, Search } from '@mui/icons-material'
import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            {/* Avatars for logged in user */}
            <AccountCircle className='header-avatar'/>
            {/* Time Icon */}
            <AccessTime />
        </div>

        <div className='header-search'>
            {/* Search Icon */}
            <Search />
            {/* Input */}
            <input placeholder='Search'></input>
        </div>

        <div className='header-right'>
            {/* Help Icon */}
            <HelpOutline />
        </div>
    </div>
  )
}

export default Header