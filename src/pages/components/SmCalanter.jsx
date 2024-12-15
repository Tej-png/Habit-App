import { useState } from 'react';
import '../../App.css';
import add from '../../assets/add.svg';

function SmCalender({ today, openModal, closeModal, userPass }) {
  const [startDate, setStartDate] = useState(today);
  const getMonthInWords = (date) => {
    const shortMonths = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return shortMonths[date.getMonth()];
  };

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  function getWeekDays(start) {
    const dates = [];
    for (var i = 0; i <= 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push({
        day: days[date.getDay()],
        date: date.getDate(),
      });
    }

    return dates;
  }
  const weekdays = getWeekDays(startDate);

  function nextDates() {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + 7);
    setStartDate(newDate);
  }

  function prevDates() {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() - 7);
    setStartDate(newDate);
  }

  return (
    <>
      <div className="nav-bar">
        <h1>
          {getMonthInWords(startDate)}, Hi {userPass}!!
        </h1>
        <img src={add} onClick={openModal} />
      </div>

      <div className="smcal-container">
        <div className="sm-calender">
          <button className="cal-button" onClick={prevDates}></button>

          <div className="sm-days">
            {weekdays &&
              weekdays.map((item, key) => (
                <div key={key}>
                  <div
                    className={
                      (item.date === today.getDate() && 'red-circle') +
                      ' day-container'
                    }
                  >
                    <div className="day">{item.day.toUpperCase()}</div>
                    <p className="day">{item.date}</p>
                  </div>
                </div>
              ))}
          </div>

          <button className="cal-button" onClick={nextDates}></button>
        </div>
      </div>
    </>
  );
}

export default SmCalender;
