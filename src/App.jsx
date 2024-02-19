import React from "react";

export default function App() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not logged in!</h1>
      </div>
    );
  }
}