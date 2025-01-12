import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuItem.css';

const MenuItem = ({ menu, subMenus, activeMenu, activeSubMenu, setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (subMenus && subMenus.length > 0) {
      setActiveMenu({ menu, subMenu: subMenus[0] });
    } else {
      setActiveMenu({ menu, subMenu: '' });
    }
  };

  const handleSubMenuClick = (selectedMenu, selectedSubMenu) => {
    setActiveMenu({ menu: selectedMenu, subMenu: selectedSubMenu });
  };

  return (
    <div className="menu-item">
      <div onClick={handleMenuClick} className={`menu-title ${activeMenu === menu ? 'active' : ''}`}>
        {menu}
      </div>
      {isOpen && subMenus && (
        <ul className="sub-menu">
          {subMenus.map((subMenu) => (
            <li key={subMenu} className={`sub-menu-item ${activeSubMenu === subMenu ? 'active' : ''}`}>
              <Link to={`/${subMenu}`} onClick={() => handleSubMenuClick(menu, subMenu)}>
                {subMenu}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;