import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="m-20">
        <h1 className="text-4xl flex">Not exactly sure what you are trying to find...</h1>
        <img src="https://http.cat/404" alt="404 CAT" className="mt-6"/>
      </div>
    );
  }
}

export default NotFoundPage;
