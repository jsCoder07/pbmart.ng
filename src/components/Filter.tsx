import React from 'react'

function Filter() {
  return (
    <div className='mt-12 flex justify-between'>
     <div className="flex gap-6 flex-wrap">
        <select name="type" id="" className="py-2 px-4 text-xs font-medium rounded-2xl bg-gray-100">
            <option>Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
        </select>
        <input type="text" className="ring-1 ring-gray-300 rounded-2xl text-xs pl-2 w-24" name='min' placeholder='min price'/>
        <input type="text" className="ring-1 ring-gray-300 rounded-2xl text-xs pl-2 w-24" name='max' placeholder='max price'/>
        <select name="size" id="" className="py-2 px-4 text-xs font-medium rounded-2xl bg-gray-100">
            <option>Size</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
        </select>
        <select name="color" id="" className="py-2 px-4 text-xs font-medium rounded-2xl bg-gray-100">
            <option>Color</option>
            <option value="physical">Test</option>
            <option value="digital">Digital</option>
        </select>
        <select name="ribbon" id="" className="py-2 px-4 text-xs font-medium rounded-2xl bg-gray-100">
            <option>Category</option>
            <option value="physical">New Arrival</option>
            <option value="digital">Popular</option>
        </select>
        <select name="type" id="" className="py-2 px-4 text-xs font-medium rounded-2xl bg-gray-100">
            <option>All Filters</option>
            
        </select>
     </div>
     <div className="">
        <select name="" id="" className="py-2 px-4 text-xs font-medium rounded-2xl bg-white ring-1 ring-gray-300">
            <option>Sort By</option>
            <option value="">Price (low to high)</option>)
            <option value="">Price (high to low)</option>)
            <option value="">Newest</option>
            <option value="">Oldest</option>
        </select>
     </div>
    </div>
  )
}

export default Filter
