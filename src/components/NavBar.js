import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between p-10 items-center">
      
      {/* Left side */}
      <div className="flex justify-between items-center">
        {/* <img src="" alt="Logo" /> */}
        {/* <h1 className="text-6xl">CP</h1> */}
        <a href="/" className='text-3xl'>Christian Payne</a> {/*ml-24*/}
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
