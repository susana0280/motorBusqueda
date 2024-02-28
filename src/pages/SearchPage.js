import React from 'react'
import { Link } from 'react-router-dom'
import logoGoogle from '../imag/imagGoogle.png'
import './SearchPage.css'
import Search from '../components/Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material'
import { selectTextString } from '../features/textSlice'
import { useSelector } from 'react-redux'
import useGoogleSearch from '../useGoogleSearch'
import Results from '../components/Results'

const SearchPage = () => {
  const textString=useSelector(selectTextString)
  const {data}=useGoogleSearch(textString)

console.log(data)
  return (
    <div className='searchPage'>
      
      <div className='searchPage_header'>
        <Link to='/'>
        <img src={logoGoogle}  alt='logo google' className='logogoogle'/>
        </Link>

     

    <div className='searchPage_headerCenter'>
        <Search hideButtons/>
  

        <div className='searchPage_options'>

            <div className='searchPage_optionsLeft'>
              
                <div className='searchPage_option'>
                <SearchIcon fontSize='small'/>
                <Link to="/all">All</Link>
                </div>

                <div className='searchPage_option'>
                <DescriptionIcon fontSize='small'/>
                <Link to="/news">News</Link>
                </div>

                <div className='searchPage_option'>
                <ImageIcon fontSize='small' />
                <Link to="/images">images</Link>
                </div>

                <div className='searchPage_option'>
                <LocalOfferIcon fontSize='small'/>
                <Link to="/shopping">shopping</Link>
                </div>

                <div className='searchPage_option'>
                <LocationOnIcon fontSize='small' />
                <Link to="/maps">maps</Link>
                </div>

                <div className='searchPage_option'>
                <MoreVertIcon fontSize='small'/>
                <Link to="/more">more</Link>
                </div>
                </div>
         
            <div className='searchPage_optionsRight'>
              
                <div className='searchPage_option'>
                <Link to="/settings">Settings</Link>
                </div>

                <div className='searchPage_option'>
                <Link to="/tools">Tools</Link>
              </div>
              </div>
            </div>
        </div>

        <div className='searchPage_headerRight'>
          <AppsIcon fontSize='small'/>
          <Avatar className='headerRight_avatar'/>
        </div>
        </div>
        <h1>{
          textString &&
          <div className='searchPage_results'>
              <p className='searchPage_resultCount'>
                About {data?.searchInformation.formattedTotalResults}  results ({data?.searchInformation.formattedSearchTime}) seconds
              </p>
          </div>
          
          }</h1>

          {data?.items.map(item=>(

            <Results key={item.cacheId} data={item} />
          ))
          }
    </div>
  )
}

export default SearchPage
