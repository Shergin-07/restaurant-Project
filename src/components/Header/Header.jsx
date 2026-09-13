import React from 'react'
import './Header.css'


const Header = () => {
  const handleViewMenu = () => { const menuSection = document.getElementById('explore-menu') 
    if (menuSection) { menuSection.scrollIntoView({ behavior: 'smooth' }) } }
  return (
    <div className='header'>
     <div className="header-contents">
        <h2>Order you favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise, one delicious meal at a time.</p>
        <button onClick={handleViewMenu}>View Menu</button>
     </div>

    </div>
  )
}



export default Header