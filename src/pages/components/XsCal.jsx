import { useState } from 'react';
import '../../App.css';

function XsCal({ today }) {
  const [count, setCount] = useState(0);
  console.log(today.getDay());

  const Days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <>
      <div className="xs-cal">
        {Days.map((day, index) => (
          <div
            key={index}
            className={'xs-days ' + (today.getDay() === index && 'red')}
          >
            {day}
          </div>
        ))}
      </div>
    </>
  );
}

export default XsCal;
