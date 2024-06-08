import React, { useState } from 'react';

function OriginalsChart() {
  const [highlighted, setHighlighted] = useState({
    recreate: true,
    continueSeries: true,
    referenceEvent: true
  });

  const toggleHighlight = (key) => {
    setHighlighted(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  return (
    <div className='container' id='original-filter-chart'>
      <p>
        It all depends on your definition of original:
      </p>

      <p>
        "An original film does not
        <span
          className={highlighted.recreate ? 'text-red-500 cursor-pointer' : 'cursor-pointer'}
          onClick={() => toggleHighlight('recreate')}
        >
          <b> recreate an existing narrative</b>
        </span>,
        <span
          className={highlighted.continueSeries ? 'text-red-500 cursor-pointer' : 'cursor-pointer'}
          onClick={() => toggleHighlight('continueSeries')}
        >
          <b> continue a series</b>
        </span>,
        or
        <span
          className={highlighted.referenceEvent ? 'text-red-500 cursor-pointer' : 'cursor-pointer'}
          onClick={() => toggleHighlight('referenceEvent')}
        >
          <b> reference a real-life event</b>
        </span>"
      </p>

      <img src="/img/chart_sample.png" alt="Chart Sample" />
    </div>
  );
}

export default OriginalsChart;
