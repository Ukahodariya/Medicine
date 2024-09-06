import React, { useState } from 'react';
import './medicine.scss';
import { IoSearchSharp } from "react-icons/io5";
import categoryApi from '../../categoryApi/categoryApi';
import { BsSearch } from 'react-icons/bs';

export default function Medicine() {
    const diabetesData = categoryApi[0].medicineDetails[0].Diabetes;
    
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(categoryApi[0].medicineDetails[0].Diabetes);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        // Filter products based on search term
        const filtered = categoryApi[0].product.filter(
            (product) =>
                product.name && product.name.toUpperCase().includes(term.toUpperCase())
        );
        setFilteredProducts(filtered); // Update the state with filtered products
    };

    return (
        <div className='medicine'>
            <div className='container'>
                <div className="men-search-main">
                    <div className="men-search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                            value={searchTerm}
                            onChange={handleSearch} // Updates searchTerm and filtered products
                        />
                        <p className="men-search-icon">
                            <BsSearch />
                        </p>
                    </div>
                </div>
                <div className='medicine-content'>
                    <div className='medicine-card-diabetes'>
                        <div className='medicine-card-heading'>
                            <h2>Diabetes</h2>
                        </div>
                        <div className='medicine-card-grid'>
                            {filteredProducts.map((item) => (
                                <div className='medicine-card-description' key={item.id}>
                                    <div>
                                        <div className='medicine-card-description-image'>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className='medicine-card-description-text-alignment'>
                                            <div className='medicine-card-description-text'>
                                                <h3>{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='medicine-card-description-btn'>
                                        <span>{item.quantity}</span>
                                        <div className='medicine-card-description-flex'>
                                            <a>₹{item.price}</a>
                                            <p>MRP <del>₹{item.mrp}</del></p>
                                            <span>{item.discount}</span>
                                        </div>
                                        <button>Add To Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
