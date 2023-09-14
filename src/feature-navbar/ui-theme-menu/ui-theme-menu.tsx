import './ui-theme-menu.css';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import DropdownButton from '../ui-dropdown-button';
import { Themes } from '../../shared/data-access-themes';

function ThemeMenu(props: {
  state: string;
  set: React.Dispatch<React.SetStateAction<string>>;
  theme: Themes;
  setTheme: (theme: Themes) => void;
}) {
  const ref = useRef(null);
  const active = (th: Themes): boolean => props.theme === th;
  return (
    <CSSTransition
      nodeRef={ref}
      in={props.state === 'themes'}
      unmountOnExit
      timeout={500}
      classNames="menu-secondary">
      <div ref={ref}>
        <DropdownButton onClick={() => props.set('main')}>{'<-  Back'}</DropdownButton>
        <DropdownButton active={active(Themes.BLUE)} onClick={() => props.setTheme(Themes.BLUE)}>
          Blue
        </DropdownButton>
        <DropdownButton
          active={active(Themes.CHERRY)}
          onClick={() => props.setTheme(Themes.CHERRY)}>
          Cherry
        </DropdownButton>
        <DropdownButton
          active={active(Themes.VIOLET)}
          onClick={() => props.setTheme(Themes.VIOLET)}>
          Violet
        </DropdownButton>
        <DropdownButton active={active(Themes.GREEN)} onClick={() => props.setTheme(Themes.GREEN)}>
          Green
        </DropdownButton>
        <DropdownButton active={active(Themes.MESH)} onClick={() => props.setTheme(Themes.MESH)}>
          Mesh Purple
        </DropdownButton>
        <DropdownButton
          active={active(Themes.ORANGE)}
          onClick={() => props.setTheme(Themes.ORANGE)}>
          Orange
        </DropdownButton>
        <DropdownButton
          active={active(Themes.PURPLE)}
          onClick={() => props.setTheme(Themes.PURPLE)}>
          Purple
        </DropdownButton>
        <DropdownButton active={active(Themes.WHITE)} onClick={() => props.setTheme(Themes.WHITE)}>
          White
        </DropdownButton>
        <DropdownButton active={active(Themes.RETRO)} onClick={() => props.setTheme(Themes.RETRO)}>
          Retro Gradient
        </DropdownButton>
        <DropdownButton
          active={active(Themes.SUMMER)}
          onClick={() => props.setTheme(Themes.SUMMER)}>
          Summer Wave
        </DropdownButton>
        <DropdownButton
          active={active(Themes.ANIMATED)}
          onClick={() => props.setTheme(Themes.ANIMATED)}>
          Animated gradient
        </DropdownButton>
      </div>
    </CSSTransition>
  );
}

export default ThemeMenu;
