import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  container?: HTMLElement | null;
  children?: any;
};

const Reparent = ({ container, children }: Props) => {
  const [portalContainer] = useState(() => document.createElement('div'));

  useEffect(() => {
    portalContainer.parentElement?.removeChild(portalContainer);
    container?.appendChild(portalContainer);
  }, [container, portalContainer]);

  return ReactDOM.createPortal(children, portalContainer);
};

export default Reparent;
