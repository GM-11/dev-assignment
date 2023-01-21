import React from "react";

function Header() {
  return (
    <div className="bg-background text-white  rounded-3xl m-5 flex flex-row justify-between">
      <div className="px-6 py-4">ADILO</div>
      <ul className="flex  m-3  flex-row">
        <button className="px-3 py-1">Home</button>
        <button className="px-3 py-1">About</button>
        <button className="px-3 py-1">Contact Us</button>
        <button className="mx-3 text-background px-3 py-1 bg-white rounded-3xl">
          Login
        </button>
      </ul>
    </div>
  );
}

export default Header;
