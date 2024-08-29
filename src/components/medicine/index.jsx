import React from 'react'
import './medicine.scss'
import { IoSearchSharp } from "react-icons/io5";

export default function Medicine() {
    return (
        <div className='medicine'>
            <div className='container'>
                <div className='medicine-search'>
                    <input type="text" placeholder='Search Medicines' />  
                    <IoSearchSharp className='search-icon'/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
