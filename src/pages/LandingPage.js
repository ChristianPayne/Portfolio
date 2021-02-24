import React, { Component } from 'react';
import ProfilePicture from '../components/Landing/ProfilePicture';
import Header from "../components/SiteWide/Header";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="mx-12 md:m-12 h-full">
          <Header className="md:hidden my-8 sm:text-3xl">Christian Payne</Header>
          {/* About me */}
          <div className="md:px-6 grid justify-items-stretch grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:items-center md:justify-center text-gray-800 select-none">
            <p className="md:row-start-2 sm:text-2xl md:text-4xl md:text-right text-center p-4 sm:px-4">
            UCI Coding Bootcamp graduate.<br/>
            <span className="bg-green-400 bg-opacity-70">Full stack web developer</span>.<br/>
            Full time nerd.
            </p>
            
            {/* Profile Picture Component */}
            <div className="px-4 row-start-1 md:row-start-2 justify-self-center md:justify-self-start">
              <ProfilePicture className="rounded-full md:rounded-none" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;


