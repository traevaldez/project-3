import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        Made with &hearts; by Group 9 &copy;{new Date().getFullYear()} 
      </div>
    </footer>
  );
};

export default Footer;
