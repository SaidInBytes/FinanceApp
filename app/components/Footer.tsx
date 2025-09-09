import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#181C25] border-t border-[#2C3140] py-4 px-6 text-center text-gray-400 mt-12">
    <div>
      &copy; {new Date().getFullYear()} FinansApp. All rights reserved.
    </div>
    <div className="mt-2 text-xs">
      Powered by Next.js &amp; .NET
    </div>
  </footer>
);

export default Footer;
