import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

import { IoMdSearch } from "react-icons/io";

export default function TableHeader({ linkName }) {
      const [filterSearch, setFilterSearch] = useState(false);
  return (
    <div>
        
        {filterSearch && (
                                <div className="flex gap-2 bg-[#F9FAFB] p-4 mb-5">
                                  <form>
                                    <input
                                        type="text"
                                        placeholder="Search name"
                                        className="w-[400px] text-[14px] px-4 py-3 mr-2 border border-[#00000025] rounded-[4px]"
                                    />
                                    <button type='submit' className="bg-[#1E40AF] text-[#fff] p-3 text-[18px] rounded-[4px]">
                                        <IoMdSearch />
                                    </button>
                                    
                                    
                                    
                                    </form>  
                                </div>
                            )}
    
    
                            <div className='flex items-center justify-between bg-slate-100 py-3 px-4 border rounded-t-md border-slate-400'>
    
                                <h3 className='text-[26px] font-semibold'>{linkName}</h3>
                                <div className='flex justify-between'>
                                    <button
                                        onClick={() => setFilterSearch(!filterSearch)}
                                        className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 mr-3 rounded-[8px] cursor-pointer"
                                    >
                                        {/* <FaFilter /> */}
                                        {filterSearch ? <MdFilterAltOff /> : <MdFilterAlt />}
                                    </button>
                                    <button className='text-white font-medium px-4 bg-green-700 rounded-lg focus:outline-none hover:bg-green-900'>
                                        Change Status
                                    </button>
                                    <button className='text-white font-medium px-4 mx-4 bg-red-700 rounded-lg focus:outline-none hover:bg-red-900'>
                                        Delete
                                    </button>
                                </div>
                            </div></div>
  )
}
