import React from 'react'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, IconButton } from '@mui/material';
import imagGoogle from '../imag/imagGoogle.png'
import {Link} from "react-router-dom"
import Search from '../components/Search';

const Home = () => {
  return (
    <div className='home'>
      <div className='home_header'>
           
            <div className='home_header_left'>
                <Link to="/about">Sobre Google</Link>
                <Link to="/store">Tienda </Link>
            </div>

            <div className='home_header_right'>
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">imágenes</Link>
                <IconButton>
                <AppsIcon/>
                </IconButton>
                 <Avatar/>
            </div>
        </div>


        <div className='home_body'>
        <img src={imagGoogle} alt='imagen google' className='imagGoogle' />
        <Search hideButtons/>
        </div>

        </div>

   
  )
}

export default Home
