import React from 'react';

const Header: React.FC = () => (
  <header className="bg-gradient-to-r from-[#181C25] via-[#23283A] to-[#141721] border-b border-[#2C3140] py-4 px-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
    <div className="flex flex-col items-center w-full gap-2">
      <img src="/globe.svg" alt="Logo" className="w-8 h-8 drop-shadow mx-auto" />
      <span className="text-2xl font-extrabold tracking-tight text-blue-400 text-center">FinanceApp</span>
    </div>
  
  </header>
);

export default Header;
