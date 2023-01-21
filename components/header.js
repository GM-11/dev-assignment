import React from "react";

function Header() {
  return (
    <div className="bg-background text-white  rounded-3xl m-5 flex flex-row justify-between">
      <div className="px-6 py-4">ADILO</div>
      <ul className="flex  m-3  flex-row">
        <button className="mx-5 py-1">Home</button>
        <button className="mx-5 py-1">About</button>
        <button className="mx-5 py-1">Contact Us</button>
        <button className="mx-5 text-background py-1 px-3 bg-white rounded-3xl border-2 border-white hover:bg-transparent hover:text-white  ease-in duration-100">
          Login
        </button>
      </ul>
    </div>
  );
}

export default Header;
