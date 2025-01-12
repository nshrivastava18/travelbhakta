import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../features/menu/menuSlice';

const LeftPanel = () => {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.menu.activeMenu);
  const [menus] = useState([
    { menu: 'Home', path: '/home' },
    { menu: 'About', path: '/about' },
    { menu: 'Bookings', path: '/bookings' }, // New menu item
    { menu: 'Destinations', path: '/destinations' }, // New menu item
    { menu: 'Contact Us', path: '/contact' } // New menu item
  ]);

  const handleSetActiveMenu = (menu) => {
    dispatch(setActiveMenu({ menu: menu.menu, path: menu.path }));
  };

  return (
    <div className="left-panel">
      <h3>BRANDING</h3>
      <ul>
        {menus.map(({ menu, path }) => (
          <li
            key={menu}
            className={activeMenu === menu ? 'active' : ''}
            onClick={() => handleSetActiveMenu({ menu, path })}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;