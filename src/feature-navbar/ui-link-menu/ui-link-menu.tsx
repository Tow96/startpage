import './ui-link-menu.css';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import DropdownButton from '../ui-dropdown-button';
import LinkEditor from '../ui-link-editor';

import { PageLink } from '../../shared/data-access-links/links.utils';

function LinkMenu(props: {
  state: string;
  set: React.Dispatch<React.SetStateAction<string>>;
  links: PageLink[];
  setLinks: (i: number, val: PageLink) => void;
}) {
  const ref = useRef(null);
  return (
    <CSSTransition
      nodeRef={ref}
      in={props.state === 'links'}
      unmountOnExit
      timeout={500}
      classNames="menu-secondary">
      <div ref={ref}>
        <DropdownButton onClick={() => props.set('main')}>{'<-  Back'}</DropdownButton>
        <div className="linklist">
          {props.links.map((link, i) => (
            <LinkEditor index={i} link={link} set={props.setLinks} key={i} />
          ))}
        </div>
      </div>
    </CSSTransition>
  );
}

export default LinkMenu;
