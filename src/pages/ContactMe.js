import React, { Component } from 'react';

class ContactMe extends Component {
  render() {
    return (
      <div>
        <div className="flex bg-green-400 justify-around m-6 w-1/2 mx-auto">
        <button className="p-4 bg-gray-800 rounded-2xl text-xl">Connect</button>
        <button className="p-4 bg-gray-800 rounded-2xl text-xl">Call</button>
        <button className="p-4 bg-gray-800 rounded-2xl text-xl">Email</button>
      </div>
      </div>
    );
  }
}

export default ContactMe;
