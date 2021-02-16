import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between p-10 items-center">
      
      {/* Left side */}
      <div className="flex justify-between items-center">
        <img src="./assets/CPFav-02.png" alt="Logo" className="w-24"/>
        <a href="/" className='ml-12 text-3xl'>Christian Payne</a>
      </div>

      {/* Right side */}
      <div className="flex justify-end">
        <a href="/projects" className="px-6 py-4">Projects</a>
        <a href="/contact-me" className="px-6 py-4">Contact Me</a>
      </div>

      
    </nav>
  );
}

export default Navbar;
