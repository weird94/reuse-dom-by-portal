import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';

export default function Single(props: { container: HTMLDivElement | null }) {
  const { container } = props;
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount');
    };
  }, []);
  return container
    ? ReactDOM.createPortal(<span id='portal'>portal</span>, container)
    : null;
}
