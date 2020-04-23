import React, { useState, useRef } from 'react';
import Item from './Item';

const App = () => {
  const datas = [
    {
      src:
        'https://static.ccrgt.com/images/0cdbc8fe-7f10-4486-9f07-740d93c76803.jpg',
    },
    {
      src:
        'https://static.ccrgt.com/images/e56f498c-66ca-4c74-82f4-27a6480a6258.png',
    },
  ];

  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLImageElement | null>(null);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
      ref={ref}
    >
      {datas.map((data, index) => {
        return (
          <Item
            container={index === active ? ref.current : null}
            src={data.src}
            key={index}
            onActiveChange={(isActive) => {
              if (isActive) {
                setActive(index);
              } else {
                setActive(-1);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default App;
