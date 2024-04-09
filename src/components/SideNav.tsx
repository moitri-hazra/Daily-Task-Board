import  { useState } from 'react';
import { AiOutlineHome, AiOutlineDesktop, AiOutlineUsergroupAdd, AiOutlineSchedule, AiOutlineUser } from 'react-icons/ai';

interface SideNavProps {
  isMobile: boolean;
}
const SideNav: React.FC<SideNavProps> = ({ isMobile }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className={`SideNav ${isMobile ? 'hidden lg:block' : 'w-1/5'} bg-gray-200 h-full`}>
        <ul>
          <li className="mb-2">
            <a className="flex items-center p-2 text-sm font-medium text-gray-900 rounded-lg bg-gray-200" href="#">
              <AiOutlineHome className="w-6 h-6 text-gray-500 mr-3" />
              Home
            </a>
          </li>
          <li className="mb-2 relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center p-2 text-sm font-medium text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-300 pr-24"
            >
              <AiOutlineDesktop className="w-6 h-6 text-gray-500 mr-3 " />
              Console
            </button>
            {showDropdown && (
              <ul className="absolute left-0 top-full bg-white shadow-md rounded-md z-10 mr-4">
                <li>
                  <a className="flex items-center p-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-200 ml-3" href="#" >
                    <AiOutlineSchedule className="w-6 h-6 text-gray-500 mr-3" />
                    Attendance
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-200 ml-3" href="#">
                    <AiOutlineUser className="w-6 h-6 text-gray-500 mr-3" />
                    Overview
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-200 ml-3" href="#">
                    <AiOutlineUsergroupAdd className="w-6 h-6 text-gray-500 mr-3" />
                    Staff
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;