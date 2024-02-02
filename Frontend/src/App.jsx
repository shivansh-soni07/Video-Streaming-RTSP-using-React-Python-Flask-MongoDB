import React,{useState} from 'react'
import UrlInput from './components/UrlInput'
import OverlayData from './components/OverlayData'
import Header from './components/Header'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [refresh, setRefresh] = useState(0)
  

  return (
    <div>
      <Toaster/>
      <Header/>
      <main className='lg:flex justify-between'>
        <div className='w-full mr-80 flex justify-center'>
          <OverlayData open={open} setOpen={setOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} refresh={refresh} setRefresh={setRefresh}/>
        </div>
        <UrlInput open={open} refresh={refresh} modalOpen={modalOpen}/>
      </main>
    </div>
  )
}

export default App
