import React from 'react';
import notification from '../assets/notification.png';
import user from '../assets/user.png';
import notification_b from '../assets/notification_b.png';
import search from '../assets/search.png';
import cross from '../assets/cross.png';


const TopNav: React.FC = () => {
  return (
    <>
      <header className="header__desk flex justify-between items-center h-26 mb-8 py-6 px-8">
        <h1 className="header__title font-semibold m-0">ABCHotel</h1>
        <div className="header__right flex justify-between items-center h-12">
          <div className="bell relative w-12 h-12 pt-1 pl-2 cursor-pointer">
            <img className="bell__img absolute" src={notification} alt="Notification" />
            <div className="dot__ w-2 h-2 rounded absolute"></div>
          </div>
          <img className="user__img w-12 h-12 cursor-pointer" src={user} alt="User" />
        </div>
      </header>
    </>
  );
};

export default TopNav;
