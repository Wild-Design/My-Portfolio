const FirstWave = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '150px',
        overflow: 'hidden',
        position: 'absolute',
        bottom: '-150px',
      }}
    >
      <svg
        viewBox='0 0 500 150'
        preserveAspectRatio='none'
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <path
          d='M-12.13,103.13 C149.99,150.00 271.49,-49.98 517.21,132.73 L500.00,0.00 L0.00,0.00 Z'
          style={{ stroke: 'none', fill: '#2A3362' }}
        ></path>
      </svg>
    </div>
  );
};

export default FirstWave;
