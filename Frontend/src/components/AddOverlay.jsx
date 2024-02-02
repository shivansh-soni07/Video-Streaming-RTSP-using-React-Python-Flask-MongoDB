import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddOverlay = ({open,onClose}) => {

    const [loading,setLoading] = useState(false)

    const [overlayForm,setOverlayForm] = useState({
        name: '',
        type:'',
        value:'',
        position_x:0,
        position_y:0,
        width:0,
        height:0
    })

    const handleChange =(e)=>{
        setOverlayForm({
          ...overlayForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post('http://127.0.0.1:5001/overlay/post',overlayForm)
            toast.success('Created Successfully')
        } catch (error) {
            console.log(error)
            toast.error('Error Occured !!')
        }finally{
            onClose()
            setLoading(false)
            setOverlayForm({
                name: '',
                type:'',
                value: '',
                position_x:0,
                position_y:0,
                width:0,
                height:0
            })
        }
        
        
    }

    return (
        <dialog open={open} className="modal">
            <div className="modal-box">
            <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg text-black  ">Add Overlay Item</h3>
                <div className="modal-action">
                    <form className='w-screen max-2xl' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-y-6'>
                        <div className='flex items-center gap-x-8'>
                        <label className='flex text-black   flex-col' htmlFor="name">
                            Name
                        <input 
                        type="text" 
                        name="name" 
                        id='name'
                        value={overlayForm.name} 
                        onChange={handleChange}
                        required
                        placeholder='Name'
                        className='input w-32 md:w-auto bg-white text-black  border-black border-b-1'
                        />
                        </label>
                        <label className='flex text-black   flex-col' htmlFor="type">
                            Type
                        <select className='select bg-white text-black  border-black border-b-1' id='type' type="text" name="type" placeholder='Select type' value={overlayForm.type} required onChange={handleChange}>
                            <option disabled value="">Select Type</option>
                            <option value="text">Text</option>
                            <option value="image">Image</option>
                        </select>
                        </label>
                        </div>
                        {overlayForm.type === 'image' &&
                        <label className='flex text-black   flex-col' htmlFor="value">
                            Image Url
                        <input 
                        type="text" 
                        name="value" 
                        id='value'
                        placeholder='Url'
                        value={overlayForm.value} 
                        onChange={handleChange}
                        className='input w-72 md:w-auto bg-white text-black  border-black border-b-1'
                        required
                        />
                        </label>}
                        {overlayForm.type === 'text' &&
                        <label className='flex text-black   flex-col' htmlFor="value">
                            Text
                        <input 
                        type="text" 
                        name="value" 
                        id='value'
                        placeholder='Text'
                        value={overlayForm.value} 
                        onChange={handleChange}
                        className='input w-72 md:w-auto bg-white text-black  border-black border-b-1'
                        required
                        />
                        </label>}
                        
                        <div className='flex items-center gap-x-8'>
                        <label className='flex text-black   flex-col' htmlFor="position_x">
                            Position x-axis (%)
                        <input 
                        type="number" 
                        name="position_x" 
                        id='position_x'
                        placeholder='(%)'
                        value={overlayForm.position_x} 
                        onChange={handleChange}
                        className='input md:w-auto bg-white w-32 text-black  border-black border-b-1'
                        />
                        </label>
                        <label className='flex text-black   flex-col' htmlFor="position_y">
                            Position y-axis (%)
                        <input 
                        type="number" 
                        name="position_y" 
                        id='position_y'
                        placeholder='(%)'
                        value={overlayForm.position_y} 
                        onChange={handleChange}
                        className='input w-32 md:auto bg-white text-black  border-black border-b-1'
                        />
                        </label>
                        </div>
                        <div className='flex items-center gap-x-8'>
                        <label className='flex text-black   flex-col' htmlFor="width">
                            Width (%)
                        <input 
                        type="number" 
                        name="width" 
                        id='width'
                        placeholder='(%)'
                        value={overlayForm.width} 
                        onChange={handleChange}
                        className='input w-32 md:w-auto bg-white text-black  border-black border-b-1'
                        required
                        />
                        </label>
                        <label className='flex text-black   flex-col' htmlFor="height">
                            Height (%)
                        <input 
                        type="number" 
                        name="height" 
                        id='height'
                        placeholder='(%)'
                        value={overlayForm.height} 
                        onChange={handleChange}
                        className='input w-32 md:w-auto bg-white text-black  border-black border-b-1'
                        />
                        </label>
                        </div>
                        <button disabled={loading} type='submit' className="btn btn-success text-black  ">Add </button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default AddOverlay