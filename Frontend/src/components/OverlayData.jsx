import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import toast from 'react-hot-toast';
import AddOverlay from './AddOverlay'
import UpdateOverlay from './UpdateOverlay'

const OverlayData = ({open,setOpen,modalOpen,setModalOpen,refresh,setRefresh}) => {
  const [OverlayData, setOverlayData] = useState([])
  const [loading,setLoading] = useState(false)
  const [selectOverlay, setselectOverlay] = useState({})

  const onModalOpen = () =>setModalOpen(true)

  const onModalClose = () =>setModalOpen(false)

  const onClose = () => setOpen(false)

  const onOpen = () => setOpen(true)

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5001/overlay/all');
        const data = await res.data
        setOverlayData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getList();
  }, [open,modalOpen,refresh]);


  const onEditClick = (overlay) => {
    setselectOverlay(overlay);
    onModalOpen();
  };

  const onDeleteClick = async(overlay) => {
    try {
      await axios.delete(`http://127.0.0.1:5001/overlay/delete/${overlay._id.$oid}`)
      toast.success('Deleted overlay')
      setRefresh(prev=>prev+1)
      setLoading(true)
    } catch (error) {
      console.log(error)
      toast.error('Error deleting overlay')
    }finally{
      setRefresh(prev=>prev+1)
      setLoading(false)
    }
  };


  return (
    <div className='space-y-6 border border-black p-4 rounded-t-xl'>
      <AddOverlay open={open} onClose={onClose} />
      <UpdateOverlay open={modalOpen} data={selectOverlay} onClose={onModalClose}/>
      <div className='flex items-center gap-x-6 md:gap-32 border-b border-black p-2'>
        <h2 className='text-black font-extrabold text-lg md:text-3xl '>All Overlays</h2>
        <button onClick={onOpen} className='btn btn-accent h-4'>
          <AddIcon />
           Add  
        </button>
      </div>
      <div className='grid grid-cols-1 gap-y-3'>
        {OverlayData.map((overlay) => (
            <div key={overlay.name} className="alert alert-info h-12 flex text-white  items-center justify-between">
              <div className='flex gap-x-4  items-center'>
            <ArrowCircleRightIcon />
            <span>{overlay.name.slice(0, 30)}</span>
              </div>
              <div className='space-x-6 mr-6'>
              <button onClick={()=>onEditClick(overlay)} className='w-4 h-4 bg-transparent'>
               <EditIcon />
               
              </button>
              <button disabled={loading} onClick={()=>onDeleteClick(overlay)} className='w-4 h-4 bg-transparent text-red-600'>
              <DeleteIcon />
              </button>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default OverlayData