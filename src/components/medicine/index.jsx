import React from 'react'
import './medicine.scss'
import { IoSearchSharp } from "react-icons/io5";
import categoryApi from '../../categoryApi/categoryApi';

export default function Medicine() {
    const data = categoryApi[0].medicineDetails;
    console.log("data", data)
    return (
        <div className='medicine'>
            <div className='container'>
                <div className='medicine-search'>
                    <input type="text" placeholder='Search Medicines' />
                    <IoSearchSharp className='search-icon' />
                </div>
                <div className='medicine-content'>
                    <div className='medicine-card-diabetes'>
                        <div className='medicine-card-heading'>
                            <h2>Diabetes</h2>
                        </div>
                        <div className='medicine-card-grid'>
                            {data.map((item) => (
                                <div className='medicine-card-description'>
                                    <div className='medicine-card-description-image'>
                                        <img src={item.image}></img>
                                    </div>
                                    <div className='medicine-card-description-text-alignment'>
                                        <div className='medicine-card-description-text'>
                                            <h3>{item.title}</h3>
                                            <span>{item.quantity}</span>
                                            <div className='medicine-card-description-flex'>
                                                <a>₹{item.price}</a>
                                                <p>MRP <del>₹{item.mrp}</del></p>
                                                <span>{item.discount}</span>
                                            </div>
                                            <div className='medicine-card-description-btn'>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


