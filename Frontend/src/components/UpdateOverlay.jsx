import axios from 'axios'
import React, { useState , useEffect} from 'react'
import toast from 'react-hot-toast'

const UpdateOverlay = ({open,onClose,data}) => {

    const [updateForm, setUpdateForm] = useState({});
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUpdateForm({
      name: data.name || '',
      type: data.type || '',
      value: data.value || '',
      position_x: data.position_x || '',
      position_y: data.position_y || '',
      width: data.width || '',
      height: data.height || '',
    });
  }, [data]);

    const handleChange =(e)=>{
        setUpdateForm({
          ...updateForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            await axios.put(`http://127.0.0.1:5001/overlay/update/${data._id.$oid}`,updateForm)
            toast.success('Updated Successfully')
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }finally{
            onClose()
            setLoading(false)
        }
        
        
    }

    return (
        <dialog open={open} className="modal ">
            <div className="modal-box  drop-shadow-2xl">
            <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost  absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg text-black  ">Update Overlay Item</h3>
                <div className="modal-action">
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-y-6'>
                        <div className='flex items-center gap-x-8'>
                        <label className='flex text-black   flex-col' htmlFor="name">
                            Name
                        <input 
                        type="text" 
                        name="name" 
                        id='name'
                        value={updateForm.name}
                        onChange={handleChange}
                        required
                        placeholder='Name'
                        className='input w-32 md:w-auto bg-white text-black border-black border-b-1'
                        />
                        </label>
                        <label className='flex text-black   flex-col' htmlFor="type">
                            Type
                        <select className='select bg-white text-black border-black border-b-1' id='type' type="text" name="type" placeholder='Select type'  value={updateForm.type} required onChange={handleChange}>
                            <option disabled value="">Select Type</option>
                            <option value="text">Text</option>
                            <option value="image">Image</option>
                        </select>
                        </label>
                        </div>
                        
                        <label className='flex text-black   flex-col' htmlFor="value">
                            Image Url or Text
                        <input 
                        type="text" 
                        name="value" 
                        id='value'
                        placeholder='Url'
                        value={updateForm.value} 
                        onChange={handleChange}
                        className='input w-32 md:w-auto bg-white text-black border-black border-b-1'
                        required
                        />
                        </label>
                        
                        <div className='flex items-center gap-x-8'>
                        <label className='flex text-black   flex-col' htmlFor="position_x">
                            Position x-axis (%)
                        <input 
                        type="number" 
                        name="position_x" 
                        id='position_x'
                        placeholder='(%)'
                        value={updateForm.position_x}
                        onChange={handleChange}
                        className='input w-32 md:w-auto bg-white text-black border-black  '
                        />
                        </label>
                        <label className='flex text-black   flex-col' htmlFor="position_y">
                            Position y-axis (%)
                        <input 
                        type="number" 
                        name="position_y" 
                        id='position_y'
                        placeholder='%'
                        value={updateForm.position_y}
                        onChange={handleChange}
                        className='input w-32 md:w-auto bg-white border-black border-b-1 text-black  '
                        />
                        </label>
                        </div>
                        <div className='flex items-center gap-x-8'>
                        <label className='flex text-black  flex-col' htmlFor="width">
                            Width (%)
                        <input 
                        type="number" 
                        name="width" 
                        id='width'
                        placeholder='(%)'
                        value={updateForm.width}
                        onChange={handleChange}
                        className='input w-32 md:w-auto bg-white text-black border-black border-b-1'
                        required
                        />
                        </label>
                        <label className='flex text-black  flex-col' htmlFor="height">
                            Height (%)
                        <input 
                        type="number" 
                        name="height" 
                        id='height'
                        placeholder='(%)'
                        value={updateForm.height}
                        onChange={handleChange}
                        className='input w-32 md:w-auto bg-white text-black border-black border-b-1'
                        />
                        </label>
                        </div>
                        <button disabled={loading} type='submit' className="btn btn-success text-black border-black border-b-1">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default UpdateOverlay