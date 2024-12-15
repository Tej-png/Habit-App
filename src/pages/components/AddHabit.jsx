import { useState } from 'react';
import '../../App.css';

function AddHabit({ closeModal, setHabits, setCount }) {
  const [habitName, setHabitName] = useState('');
  const [habitStartDate, setHabitStartDate] = useState('');
  function handleHabitName(e) {
    const name = e.target.value;
    setHabitName(name);
  }

  function handleSave(event) {
    setHabits((prev) => [
      ...prev,
      {
        habitName: habitName,
      },
    ]);
    setCount(+1);
    setHabitName('');
    closeModal();
  }

  return (
    <>
      <div className="add-habit-container">
        <div className="add-habit-content">
          <div className="addhabit-bar">
            <button onClick={handleSave}>SAVE</button>
            <p>New Habit</p>
            <button onClick={closeModal}>CANCEL</button>
          </div>
          <div className="habits-form">
            <div className="habit-name">
              <label for="addhabit">Your new habit </label>
              <input
                id="addhabit"
                value={habitName}
                onChange={handleHabitName}
              ></input>
            </div>
            <div className="habit-date">
              <label for="addhabitdate">Start Date </label>
              <input
                id="addhabitdate"
                type="date"
                value={habitStartDate}
                onChange={() => setHabitStartDate(habitStartDate)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddHabit;
