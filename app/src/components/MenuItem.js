import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuItem.css';

const MenuItem = ({ menu, subMenus, activeMenu, activeSubMenu, setActiveMenu }) => {

  const handleMenuClick = () => {
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
    <Link to={`/${subMenus[0]}`} onClick={() => handleSubMenuClick(menu, subMenus[0])}>
      {menu}
    </Link>
  );
};

export default MenuItem;