import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import FilterElements from '../components/FilterElements';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';

const MainPage: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setFilteredTasks(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const applyFilter = (filter: string) => {
    if (filter === 'All') {
      setFilteredTasks(tasks);
    } else if (filter === 'Delayed' || filter === 'On-Time') {
      const filtered = tasks.filter(task => task.feedback.includes(filter));
      setFilteredTasks(filtered);
    } else {
      const filtered = tasks.filter(task => task.status === filter);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className="MainPage">
      <TopNav />
      <SideNav isMobile={isMobile} />
      <FilterElements onFilterChange={applyFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      {isMobile && <Footer />}
    </div>
  );
};

export default MainPage;
