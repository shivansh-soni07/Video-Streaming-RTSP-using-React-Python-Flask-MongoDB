import React from 'react'
import { useState } from 'react'
import Stream from './Stream'

const UrlInput = ({open,refresh,modalOpen}) => {
  const [videoUrl, setVideoUrl] = useState('https://rtsp.me/embed/akNDrKts/')
  const [input, setInput] = useState('')

  const handleClick = () => {
    setVideoUrl(input)
    setInput('')

  }
  return (
    <div className='flex flex-col gap-y-0  '>
      <div className='flex flex-col'>
        <h3 className='text-center font-extrabold font-serif text-2xl'>Live Stream - RTSP</h3>
        <Stream videoUrl={videoUrl} open={open} modalOpen={modalOpen} refresh={refresh}/>
      </div>
      <div className='lg:flex text-center justify-center'>
        <div className='max-w-xs space-y-1'>
          <label className='flex flex-col w-full text-black font-bold gap-y-1'  htmlFor="videoUrl">
            Change Url (https://rtsp.me/embed/k9SQ9rFN/)
            <div className='space-x-2 space-y-1'>
              <input type="text" id='videoUrl' placeholder='Enter rtsp video url' value={input} className='input input-bordered text-black border-black border-2 w-full bg-white' onChange={(e) => setInput(e.target.value)} />
              <button className='btn bg-b3  font-extrabold' onClick={handleClick}>Play This</button>
            </div>
          </label>
          <button onClick={() => setVideoUrl('https://rtsp.me/embed/akNDrKts/')} className='btn btn-warning '>
            Reset 
          </button>
        </div>
      
      </div>
    </div>
  )
}

export default UrlInput