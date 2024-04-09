import React from 'react';
import home_2 from '../assets/home_2.png';
import consoleImg from '../assets/console.png';
import plus from '../assets/plus.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer relative mt-12">
      <div className="footer__main flex justify-center items-center gap-1 px-4 py-3 rounded-t-xl">
        <div className="add absolute p-3">
          <div className="add__img relative h-8 w-8"><img src={plus} alt="Plus" /></div>
        </div>
        <div className="footer__ flex flex-col justify-center items-center gap-1">
          <div className="relative w-6 h-6"><img className="home__logo absolute" src={home_2} alt="Home" /></div>
          <h5 style={{ color:'#5F69C7' }}>Home</h5>
        </div>
        <div className="footer__ flex flex-col justify-center items-center gap-1">
          <div className="relative w-6 h-6"><img className="console__logo absolute" src={consoleImg} alt="Console" /></div> 
          <h5>Console</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
