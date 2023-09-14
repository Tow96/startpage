import './ui-dropdown-button.css';
import { PropsWithChildren } from 'react';

interface DropdownButtonProps extends PropsWithChildren {
  onClick?: () => void;
  active?: boolean;
}

function DropdownButton(props: DropdownButtonProps) {
  return (
    <div className="dropdown__button">
      <button className={props.active ? 'active' : ''} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default DropdownButton;
