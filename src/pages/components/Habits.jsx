import { useState } from 'react';
import '../../App.css';
import streak from '../../assets/streak.svg';
import tick from '../../assets/tick.svg';
import XsCal from './XsCal';

function Habits({ today, habit }) {
  const [day, setDay] = useState(1);

  return (
    <div className="habit-container">
      <div className="streak">
        <h1>{day}</h1>
        <img src={streak} />
        <p>DAY</p>
        <div className="habit-name">
          <p>{habit.habitName}</p>
          <XsCal today={today} />
        </div>
        <div className="month-cal"></div>
      </div>
      <div className="tick">
        <img src={tick} onClick={() => setDay(day + 1)} />
      </div>
    </div>
  );
}

export default Habits;
