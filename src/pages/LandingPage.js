import React, { Component } from 'react';
import ProfilePicture from '../components/Landing/ProfilePicture';

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="m-12">
          {/* About me */}
          <div className="md:px-6 grid grid-cols-2 items-center justify-center text-gray-800">
            <p className="sm:text-xl md:text-4xl text-right px-4">
            UCI Coding Bootcamp graduate.<br/>
            <span className="bg-green-400 bg-opacity-70">Full stack web developer</span>.<br/>
            Full time nerd.
            </p>
            
            {/* Profile Picture Component */}
            <div className="px-4">
              <ProfilePicture />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
