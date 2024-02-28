import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIco from '@mui/icons-material/KeyboardVoice';
import { GoogleInput } from './GoogleInput';
import { GoogleButton } from './GoogleButton';
import './Search.css'
import { setTextString } from '../features/textSlice';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'

const Search = ({hideButtons=false}) => {

  const navigate=useNavigate()
  const[input,setInput]=useState("")
  const dispatch=useDispatch();
  
  const search=(e)=>{
    e.preventDefault();
    console.log(input)

    dispatch(setTextString(input))
    navigate('/search')
  }
  
console.log(hideButtons)
  return (
  <>
  <form className='search'>

    <GoogleInput>
   
    <SearchIcon className='search_inputIcon'/>
    <input value={input} onChange={e=>setInput(e.target.value)}/>
    <KeyboardVoiceIco/>

    </GoogleInput>

    <div className='search_buttons'>
        <GoogleButton type='submit'  className={hideButtons ? "search_hideButtons" :""} onClick={search}> Buscar con google </GoogleButton>
        <GoogleButton                className={hideButtons ? "search_hideButtons" : ""} >Voy a tener suerte</GoogleButton>
    </div>
  





  </form>
  
  </>
  )
}

export default Search
