import React from 'react';

const Header: React.FC = () => (
  <header className="bg-[#181C25] border-b border-[#2C3140] py-4 px-6 flex items-center justify-between text-white shadow">
    <div className="flex items-center gap-2">
      <img src="/globe.svg" alt="Logo" className="w-8 h-8" />
      <span className="text-xl font-bold tracking-tight">FinansApp</span>
    </div>
    <nav className="space-x-6">
      <a href="/" className="hover:text-blue-400 transition">Hem</a>
      <a href="#stocks" className="hover:text-blue-400 transition">Aktier</a>
      <a href="#about" className="hover:text-blue-400 transition">Om</a>
    </nav>
  </header>
);

export default Header;
