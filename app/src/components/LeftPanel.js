import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../features/menu/menuSlice';
import MenuItem from './MenuItem';
// import HRMSLogo from '../assets/hrms-logo.svg'; // Import the SVG image

const LeftPanel = () => {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.menu.activeMenu);
  const activeSubMenu = useSelector((state) => state.menu.activeSubMenu);
  const [menus] = useState([
    { menu: 'Home', subMenus: ['home'] },
    { menu: 'Services', subMenus: ['services'] },
    { menu: 'Gallery', subMenus: ['gallery'] },
    { menu: 'Testimonials', subMenus: ['testimonials'] },
    { menu: 'Contact', subMenus: ['contact'] },
    { menu: 'About', subMenus: ['about'] },
  ]);

  const handleSetActiveMenu = (menu, subMenu) => {
    dispatch(setActiveMenu({ menu: menu.menu, subMenu: menu.subMenu }));
  };

  return (
    <div className="left-panel">
      {/* <img src={HRMSLogo} alt="HRMS Logo" className="hrms-logo" /> */}
      <ul>
        {menus.map(({ menu, subMenus }) => (
          <MenuItem
            key={menu}
            menu={menu}
            subMenus={subMenus}
            activeMenu={activeMenu}
            activeSubMenu={activeSubMenu}
            setActiveMenu={handleSetActiveMenu}
          />
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;