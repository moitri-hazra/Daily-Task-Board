import React from 'react';
import calender from '../assets/calender.png';
import green_clock from '../assets/green_clock.png';
import spoon from '../assets/spoon.png';
import red_clock from '../assets/red_clock.png';

interface Task {
  id: string;
  creatorName: string;
  name: string;
  type: string;
  deadline: string;
  from: string;
  to: string;
  status: string;
  feedback: string[];
  itemRequest?: { [key: string]: string | null };
  instruction: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const calculateTimeLeft = (deadline: string) => {
    const deadlineTime = new Date(deadline).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = deadlineTime - currentTime;
    const minutesLeft = Math.ceil(timeDifference / (1000 * 60));
    return minutesLeft;
  };

  const getDeadlineColor = (deadline: string) => {
    const minutesLeft = calculateTimeLeft(deadline);
    if (minutesLeft < 5) return 'bg-red-500';
    return 'bg-green-400';
  };

  const getStatusColor = (status: string) => {
    let bgColor = '';
    let textColor = '';

    if (status === 'Completed') {
      bgColor = 'bg-gray-100';
      textColor = 'text-green-500';
    } else if (status === 'Ongoing') {
      bgColor = 'bg-gray-100';
      textColor = 'text-yellow-300';
    } else if (status === 'Accepted') {
      bgColor = 'bg-gray-100';
      textColor = 'text-green-500';
    } else if (status === 'Not Accepted') {
      bgColor = 'bg-gray-100';
      textColor = 'text-orange-500';
    } else {
      bgColor = 'bg-gray-300';
      textColor = 'text-gray-700';
    }

    return { bgColor, textColor };
  };


  const getButtonColor = (status: string, deadline: string) => {
    const minutesLeft = calculateTimeLeft(deadline);
    if (status === 'Completed') return 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white';
    if (minutesLeft < 5) return 'bg-red-500 text-white';
    return 'bg-green-500 text-white';
  };



  const getFeedbackColor = (feedback: string | string[]) => {
    if (Array.isArray(feedback)) {
      if (feedback.includes('Delayed') && feedback.includes('Complaint')) {
        return 'bg-red-500';
      }
    } else {
      if (feedback === 'Delayed' || feedback === 'Complaint') {
        return 'bg-red-500';
      }
    }
    return 'bg-green-400';
  };

  const calculateTimeLeftFormatted = (deadline: string) => {
    const deadlineTime = new Date(deadline).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = deadlineTime - currentTime;
    const minutesLeft = Math.ceil(timeDifference / (1000 * 60));

    if (minutesLeft < 1) {
      return 'Delayed';
    } else if (minutesLeft < 60) {
      return `${minutesLeft} min`;
    } else {
      const hours = Math.floor(minutesLeft / 60);
      const remainingMinutes = minutesLeft % 60;
      return `${hours} hr ${remainingMinutes} min`;
    }
  };



  return (
    <div className="rounded-lg border p-4 flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={spoon} alt="Creator" className="w-4 h-4 mr-2" />
          <div className="text-sm">{task.creatorName}</div>
          <div className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(task.status).bgColor}`}>
            <span className={`${getStatusColor(task.status).textColor}`}>{task.status}</span>
          </div>

        </div>
        <div className={`text-sm ml-2 px-2 py-1 rounded-full ${getDeadlineColor(task.deadline)}`}>
          {task.status === 'Completed' ? (
            task.feedback.map((feedback, index) => (
              <span key={index} className={`${getFeedbackColor(feedback)} p-1 m-1 ml-2 rounded-full`}>
                {feedback}
              </span>
            ))
          ) : (
            <div className="flex items-center">
              <span>{calculateTimeLeftFormatted(task.deadline)}</span>
              {task.status !== 'Completed' && calculateTimeLeft(task.deadline) <= 5 ? (
                <img src={red_clock} alt="Red Clock" className="w-4 h-4 ml-2" />
              ) : (
                <img src={green_clock} alt="Green Clock" className="w-4 h-4 ml-2" />
              )}
            </div>
          )}
        </div>

      </div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{task.name}</h3>
        <div className="text-sm">{task.type}</div>
      </div>
      <div className="text-xs text-gray-500">
        <img src={calender} alt="Calendar" className="w-4 h-4 mr-1 inline" />
        {task.deadline}
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <div>From: {task.from}</div>
        <div>To: {task.to}</div>
      </div>
      {Object.keys(task.itemRequest || {}).length > 0 && (
        <div className="border border-gray-200 bg-gray-100 rounded p-2">
          <table className="w-full ">
            <tbody>
              {Object.entries(task.itemRequest || {}).map(([item, value]) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-green-500">{task.instruction}</div>
        </div>
      )}
      <button className={`rounded-lg py-2 mt-auto ${getButtonColor(task.status, task.deadline)}`}>
        {task.status === 'Completed' ? 'View Details' : 'Notify Staff'}
      </button>

    </div>
  );
};

export default TaskCard;
