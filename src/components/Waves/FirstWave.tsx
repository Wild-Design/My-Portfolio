import { FC } from 'react';

interface Props {
  themeColor: string;
}

const FirstWave: FC<Props> = ({ themeColor }) => {
  return (
    // <div
    //   style={{
    //     width: '100%',
    //     height: '150px',
    //     overflow: 'hidden',
    //     position: 'absolute',
    //     bottom: '-150px',
    //     zIndex: '10',
    //   }}
    // >
    //   <svg
    //     viewBox='0 0 500 150'
    //     preserveAspectRatio='none'
    //     style={{ height: '100%', width: '100%', position: 'relative' }}
    //   >
    //     <path
    //       d='M-12.13,103.13 C149.99,150.00 271.49,-49.98 517.21,132.73 L500.00,0.00 L0.00,0.00 Z'
    //       style={{ stroke: 'none', fill: themeColor }}
    //     ></path>
    //   </svg>
    // </div>

    <div
      style={{
        width: '100%',
        height: '150px',
        overflow: 'hidden',
        position: 'absolute',
        bottom: '-150px',
        zIndex: '10',
      }}
    >
      <svg
        viewBox='0 0 500 150'
        preserveAspectRatio='none'
        style={{ height: '100%', width: '100%' }}
      >
        <path
          d='M-23.42,38.00 C285.83,264.97 135.15,-168.23 517.77,164.31 L644.19,-7.38 L0.00,0.00 Z'
          style={{ stroke: 'none', fill: themeColor }}
        ></path>
      </svg>
    </div>
  );
};

export default FirstWave;
