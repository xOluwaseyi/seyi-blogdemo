import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-page">
      <h1>ERROR 404!</h1>
      <div className="error-page2">
        <h2>Sorry, this page was not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
};

export default NotFound;
