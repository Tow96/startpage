import './ui-link-editor.css';

import { useRef } from 'react';
import { LinkType, PageLink } from '../../shared/data-access-links/links.utils';
import { CSSTransition } from 'react-transition-group';

function LinkEditor(props: {
  link: PageLink;
  index: number;
  set: (i: number, val: PageLink) => void;
}) {
  const ref = useRef(null);
  const checkId = (): string => `check: ${props.index}`;

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.set(props.index, {
      ...props.link,
      type: event.target.checked ? LinkType.HEADER : LinkType.REFERENCE,
    });
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.set(props.index, { ...props.link, name: event.target.value });
  };
  const handleRefChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.set(props.index, { ...props.link, ref: event.target.value });
  };

  return (
    <div className="linkform">
      <div className="linkform__topRow">
        <div className="linkform__checkbox">
          <input
            type="checkbox"
            id={checkId()}
            checked={props.link.type === LinkType.HEADER}
            onChange={handleTypeChange}
          />
          <label htmlFor={checkId()}>Header</label>
        </div>
        <input
          className="linkform__input"
          type="text"
          value={props.link.name}
          onChange={handleNameChange}
        />
      </div>
      <CSSTransition
        nodeRef={ref}
        in={props.link.type === LinkType.REFERENCE}
        unmountOnExit
        timeout={500}
        classNames="link-form-ref">
        <input
          ref={ref}
          type="text"
          className="linkform__input"
          value={props.link.ref}
          onChange={handleRefChange}
        />
      </CSSTransition>
    </div>
  );
}

export default LinkEditor;
