
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Stream = ({ videoUrl, open, modalOpen, refresh }) => {
  const [textOverlays, setTextOverlays] = useState([]);
  const [imageOverlays, setImageOverlays] = useState([]);

  const [volume, setVolume] = useState(50);  

  useEffect(()=>{
    const getOverlays = async ()=>{
      const text = await axios.get('http://127.0.0.1:5001/overlay/txt')
      setTextOverlays(text.data)
      const image = await axios.get('http://127.0.0.1:5001/overlay/img')
      setImageOverlays(image.data)
    }
    getOverlays()
  },[open,modalOpen,refresh])

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="relative"> 
     {textOverlays.map((text)=>(
         <div key={text.name}  className='absolute z-10 text-white text-2xl   font-extrabold  ' style={{bottom:`${text.position_y}%`,left:`${text.position_x}%`,width:`${text.width}%`,height:`${text.height}%` , textShadow: "0px 0px 5px black"}}>
         {text.value}
       </div>
       
        ))}
        {imageOverlays.map((image)=>(
          <div key={image.name} className='absolute z-10 text-white  ' style={{bottom:`${image.position_y}%`,left:`${image.position_x}%`,width:`${image.width}%`,height:`${image.height}%`}}>
              <img src={image.value} alt={image.name}/>
          </div>
        ))}
        <iframe
          className="z-0 md:w-[640px] md:h-[430px] border-4 rounded-sm border-black"
          src={videoUrl}
          allowFullScreen
          controls
          onLoadedData={(event) => {
            
            const iframe = event.target;
            const player = iframe.contentWindow.document.querySelector('video');
            if (player) {
              player.volume = volume / 100;  
            }
          }}
        />
 

       <span className='font-serif font-extrabold mr-10'> Volume:</span>
        <input className='justify-center my-1'
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          />
        
      </div>
    );
  };
  
  export default Stream;