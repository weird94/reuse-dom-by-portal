import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Item = ({
  src,
  container,
  onActiveChange,
}: {
  src: string;
  container?: HTMLDivElement | null;
  onActiveChange: (active: boolean) => void;
}) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [con, setCon] = useState<HTMLDivElement | undefined | null>(container);
  const [imgStyle, setImgStyle] = useState<React.CSSProperties>({
    width: '45vw',
    height: (75 * 45) / 50 + 'vw',
  });
  const imgRef = useRef<HTMLImageElement | null>(null);
  const dom = con || ref;

  useEffect(() => {
    if (container && imgRef.current) {
      const {
        width,
        height,
        left,
        top,
      } = imgRef.current.getBoundingClientRect();

      const newImgStyle: React.CSSProperties = {
        height,
        width,
        left,
        top,
        position: 'absolute',
        transition: 'transform .3s',
        transformOrigin: 'left top',
      };

      setCon(container);
      setImgStyle(newImgStyle);
      setTimeout(() => {
        const toWidth = window.innerWidth;
        const scale = toWidth / width;
        const transform = `translate(-${left}px, -${top}px) scale(${scale})`;
        setImgStyle({ ...newImgStyle, transform });
        console.log('timer end');
      }, 0);
    } else {
      setCon(container);
    }
  }, [container]);

  const onClickFn = () => {
    if (con) {
      setImgStyle({ ...imgStyle, transform: 'translate(0,0) scale(1)' });
      setTimeout(() => {
        onActiveChange(false);
      }, 301);
    } else {
      onActiveChange(true);
    }
  };

  return (
    <div>
      <div
        style={{
          width: '45vw',
          height: 300,
          backgroundColor: 'white',
          margin: '2.5vw',
        }}
        ref={(dom) => {
          setRef(dom);
        }}
        onClick={onClickFn}
      >
        {dom
          ? ReactDOM.createPortal(
              <img ref={imgRef} src={src} style={imgStyle} alt='' />,
              dom
            )
          : null}
      </div>
    </div>
  );
};

export default Item;