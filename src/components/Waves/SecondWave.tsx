import { FC } from 'react';

interface Props {
  themeColor: string;
}

const SecondWave: FC<Props> = ({ themeColor }) => {
  return (
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
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <path
          d='M0.00,49.98 C198.36,233.39 271.49,-49.98 538.09,138.66 L500.00,0.00 L0.00,0.00 Z'
          style={{ stroke: 'none', fill: themeColor }}
        ></path>
      </svg>
    </div>
  );
};

export default SecondWave;
