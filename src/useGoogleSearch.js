//creamos nuestro hook
import { useEffect, useState } from 'react'
import API_KEY from './keys'


const CONTEXT_KEY='37a3a9477f9ce4963'

const useGoogleSearch=(textString)=>{

const [data,setData]=useState(null)

useEffect(()=>{

  const url=`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`


const fetchData=()=>{
    fetch(url)
    .then(response=>response.json())
    .then(result=>setData(result))
}
fetchData()

},[textString])


//llamada al api de google,retorna los datos en forma de objeto



    return {data}

}


export default useGoogleSearch