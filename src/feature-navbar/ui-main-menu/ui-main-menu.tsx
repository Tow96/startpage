import './ui-main-menu.css';

import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import DropdownButton from '../ui-dropdown-button';

function MainMenu(props: { state: string; set: React.Dispatch<React.SetStateAction<string>> }) {
  const ref = useRef(null);
  return (
    <CSSTransition
      nodeRef={ref}
      in={props.state === 'main'}
      unmountOnExit
      timeout={500}
      classNames="menu-primary">
      <div ref={ref}>
        <DropdownButton onClick={() => props.set('themes')}>Themes</DropdownButton>
        <DropdownButton onClick={() => props.set('links')}>Customize Links</DropdownButton>
        <DropdownButton>About</DropdownButton>
      </div>
    </CSSTransition>
  );
}

export default MainMenu;
