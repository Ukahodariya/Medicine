import Logo from '../../../src/assets/logo/MediClick.svg'
import React, { useState } from 'react'
import './header.scss'
import { FaCaretDown, FaRegUser } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import categoryApi from '../../categoryApi/categoryApi';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from "react-icons/ai";

const category = categoryApi;

function Header() {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const openNav = () => {
      setIsNavOpen(true);
      document.body.style.overflowY = "hidden";
      // .slideroffer
      document.querySelector('.slideroffer').style.zIndex = "-1";
   };
   const closeNav = () => {
      setIsNavOpen(false);
      document.body.style.overflowY = "auto";
      document.querySelector('.slideroffer').style.zIndex = "0";
   };
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
   };

   return (
      <header>
         <div className='container'>
            <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
               <div className="closebtn" onClick={closeNav}>
                  &times;
               </div>
               <Link className="menu-item" to={"/"}>
                  Home
               </Link>
               <div className="menu-item category" onClick={toggleDropdown}>
                  Category
                  <FaCaretDown />
               </div>
               <div className={`dropdown-category ${dropdownOpen ? "open" : ""}`}>
                  {category.map((item, index) => {
                     return (
                        <Link to={item.path} key={index} onClick={closeNav}>
                           {item.category}
                        </Link>
                     );
                  })}
               </div>
               <Link className="menu-item" to={"/shop"} onClick={closeNav}>
                  Shop
               </Link>
               <Link className="menu-item" to={"/profile"} onClick={closeNav}>
                  Profile{" "}
               </Link>
            </div>
            <div className='header-flex'>
               <div className='header-flex-logo'>
                  <Link to={'/'}>
                     <img src={Logo}></img>
                  </Link>
               </div>
               <div className='header-flex-grid'>
                  {
                     category.map((i) => (
                        <div className='header-flex-grid-item'>
                           <Link to={i.path}>{i.category}</Link>
                        </div>
                     ))
                  }
               </div>
               <div className='header-flex-grid-page'>
                  <div className='header-flex-grid-user'>
                     <BiSolidOffer className='header-flex-grid-user-icon-offer' />
                  </div>
                  <div className='header-flex-grid-user'>
                     <FaRegHeart className='header-flex-grid-user-icon' />
                  </div>
                  <div className='header-flex-grid-user'>
                     <FiShoppingCart className='header-flex-grid-user-icon' />
                  </div>
                  <div className='header-flex-grid-user display-none'>
                     <Link to={'/Signup'}>
                        <FaRegUser className='header-flex-grid-user-icon' />
                     </Link>
                  </div>
                  <div className='header-flex-grid-user menu-icon' onClick={openNav}>
                     <AiOutlineMenuFold className='header-flex-grid-user-icon' />
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header