import './ui-navbar.css';

import useTheme, { Themes } from '../../shared/data-access-themes';
import { useState } from 'react';

import { ReactComponent as MenuIcon } from '../icons/bars-solid.svg';
import MainMenu from '../ui-main-menu';
import ThemeMenu from '../ui-theme-menu';
import LinkMenu from '../ui-link-menu';

import usePageLinkStore from '../../shared/data-access-links/links.store';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [menuState, setMenuState] = useState('main');
  
  const { theme, setTheme } = useTheme();
  const { links, update } = usePageLinkStore();

  const handleSetTheme = (th: Themes) => {
    setTheme(th);
    setMenuActive(false);
    setMenuState('main');
  };

  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <li className="navbar__menu">
          <button onClick={() => setMenuActive(!menuActive)}>
            <MenuIcon style={{ fill: '#ddd', scale: '75%' }} />
          </button>
          {menuActive && (
            <div className="dropdown">
              <MainMenu set={setMenuState} state={menuState} />
              <ThemeMenu
                set={setMenuState}
                state={menuState}
                setTheme={handleSetTheme}
                theme={theme}
              />
              <LinkMenu set={setMenuState} state={menuState} links={links} setLinks={update}/>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
