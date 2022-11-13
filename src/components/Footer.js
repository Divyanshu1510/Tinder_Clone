import React from 'react'
import './footer.css'
import ReplayIcon from '@mui/icons-material/Replay';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';


function Footer() {
    return (
        <div className='FooterButton'>
            <IconButton className='replay'>
                <ReplayIcon fontSize='large'/>
            </IconButton>

            <IconButton className='flash'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>

            <IconButton className='star'>
                <StarRateIcon fontSize='large'/>
            </IconButton>

            <IconButton className='Favourite'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>

            <IconButton className='close'>
                <CloseIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Footer