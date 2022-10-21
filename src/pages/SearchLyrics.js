import React, { useState } from 'react'

const SearchLyrics = () => {
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')
  const [lyrics, setLyrics] = useState('')
const search = async() =>{

  const options = {
    method: 'Get',
   
      headers: {
        'X-RapidAPI-Key': '86a9a75c59msh397d65d0615d788p11be52jsncf44f96826bd',
        'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
      }
    
  }
  const response =  await fetch(`https://lyrics-finder1.p.rapidapi.com/${artist}/${song}`, options)
	const data = await (response.json())
  setLyrics(data[0].songLyric)
console.log(data);


  }
  return (
    <div>
<div className='info'>
<input placeholder='Enter artist' onChange={e=>setArtist(e.target.value)} className='input'/>
<input placeholder='Enter song name'  onChange={e=>setSong(e.target.value)} className='input'/>
<button onClick={search} className='butn'>Search</button>
</div>

<div className='text'><p>{lyrics}</p></div>
    </div>
  )
}

export default SearchLyrics