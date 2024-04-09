import React from 'react';

interface FilterElementsProps {
  onFilterChange: (filter: string) => void; 
}

const FilterElements: React.FC<FilterElementsProps> = ({ onFilterChange }) => {
  const handleClick = (filter: string) => {
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-start space-x-2">
      <button
        className="border border-yellow-500 py-1 px-3 rounded-full focus:outline-none mb-2 md:mb-0"
        onClick={() => handleClick('Not Accepted')}
      >
        Not Accepted
      </button>
      <button
        className="border border-yellow-500 py-1 px-3 rounded-full focus:outline-none mb-2 md:mb-0"
        onClick={() => handleClick('Ongoing')}
      >
        Ongoing
      </button>
      <button
        className="border border-yellow-500 py-1 px-3 rounded-full focus:outline-none mb-2 md:mb-0"
        onClick={() => handleClick('Scheduled')}
      >
        Scheduled
      </button>
      <button
        className="border border-yellow-500 py-1 px-3 rounded-full focus:outline-none mb-2 md:mb-0"
        onClick={() => handleClick('Completed')}
      >
        Completed
      </button>
      <button
        className="border border-yellow-500 py-1 px-3 rounded-full focus:outline-none mb-2 md:mb-0"
        onClick={() => handleClick('Delayed')}
      >
        Delayed
      </button>
      <button
        className="border border-yellow-500 py-1 px-3 rounded-full focus:outline-none mb-2 md:mb-0"
        onClick={() => handleClick('On-Time')}
      >
        On-Time
      </button>
    </div>
  );
};

export default FilterElements;
