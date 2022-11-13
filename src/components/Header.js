import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import './Header.css'
import { IconButton } from '@mui/material';


function Header() {
  return (
    <div className='tinder-header'>
        <IconButton className='header-icon' fontSize = 'large'>  
            <PersonIcon fontSize = 'large' />
        </IconButton>
        <IconButton>
             <img src= 'https://cdn.worldvectorlogo.com/logos/tinder-2.svg' />
        </IconButton>
        <IconButton className='header-icon' fontSize = 'large' >
            <MarkUnreadChatAltIcon fontSize = 'large' />
        </IconButton>
    </div>

  )
}

export default Header