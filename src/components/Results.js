import React from 'react'
import './Results.css'
import { Link } from '@mui/material'

const Results = ({data:{displayLink,title,link,snippet}}) => {
 
 
    return (
    <div className='result'>
      <p>
        <Link href={link}>{displayLink}</Link>
      </p>
      <Link href={link}>{title}</Link>
      <p>{snippet}</p>
    </div>
  )
}

export default Results
