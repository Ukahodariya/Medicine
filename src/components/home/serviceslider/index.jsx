import React from 'react'
import './serviceslider.scss'
import categoryApi from '../../../categoryApi/categoryApi'
export default function Serviceslider() {
    return (
        <div className='serviceslider'>
            <div className='container'>
                <div className='serviceslider-align'>
                    <div className='serviceslider-heading'>
                        <h2>Why Quickmed</h2>
                    </div>
                    <div className='serviceslider-card'>
                        {categoryApi[5].product.map((item) => (
                            <div className='serviceslider-card-align'>
                                <div className='serviceslider-card-img'>
                                    <img src={item.img} />
                                </div>
                                <div className='serviceslider-card-flex'>
                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
