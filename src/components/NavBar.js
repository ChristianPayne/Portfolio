import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between p-10 bg-gray-200 items-center">
      
      {/* Left side */}
      <div className="flex justify-between items-center">
        <img src="" alt="Logo" />
        {/* <h1 className="text-6xl">CP</h1> */}
        <a href="/" className='text-3xl ml-24'>Christian Payne</a>
      </div>

      {/* Right side */}
      <div className="flex justify-end">
        <a href="/contact-me">Contact Me</a>
      </div>

      
    </nav>
  );
}

export default Navbar;
