import React, { RefObject } from 'react';

export default function Template(props: {
  onClick: (dom: HTMLDivElement) => void;
}) {
  const ref: RefObject<HTMLDivElement> = React.createRef();
  return (
    <div
      style={{
        height: 100,
        width: window.innerWidth - 20,
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'white',
      }}
      onClick={() => ref.current && props.onClick(ref.current)}
    >
      <div style={{ height: 100, width: 100, backgroundColor: 'yellow' }} />
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ref={ref}
      ></div>
    </div>
  );
}
