import { useState } from 'react';
import '../App.css';
import SmCalender from './components/SmCalanter';
import Habits from './components/Habits';
import AddHabit from './components/AddHabit';

function Main({ userPass }) {
  const [count, setCount] = useState(0);
  const [habits, setHabits] = useState([]);
  const [isHabitOpen, setIsHabitOpen] = useState(false);

  const openModal = () => {
    setIsHabitOpen(true);
  };

  const closeModal = () => {
    setIsHabitOpen(false);
  };
  const today = new Date();
  return (
    <>
      {isHabitOpen && (
        <AddHabit
          closeModal={closeModal}
          setHabits={setHabits}
          setCount={setCount}
          habits={habits}
        />
      )}
      <SmCalender today={today} openModal={openModal} userPass={userPass} />
      <div className="habits">
        {habits &&
          habits.map((habit) => <Habits today={today} habit={habit} />)}
      </div>
    </>
  );
}

export default Main;
