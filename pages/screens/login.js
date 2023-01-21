import React, { useState } from "react";
import Image from "next/image";
function Login() {
  const [isnew, setNew] = useState(false);
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 bg-[url('/bg.png')] text-white flex flex-col items-center  pb-0">
        <div className="font-bold uppercase text-7xl my-16 ">
          {isnew ? (
            <>
              <p>join</p>
              <p>alivio</p>
            </>
          ) : (
            <>
              <p>welcome</p>
              <p>back</p>
            </>
          )}
        </div>
        <Image width={300} height={300} src="/doc-male-2.png" alt="" />
      </div>
      <div className="col-span-1 text-background flex flex-col items-center my-48">
        {isnew ? (
          <input
            type="text"
            className="bg-gray-100  border-2 border-background rounded-full w-[70%] px-5 py-3  my-2 hover:bg-background hover:text-white ease-in duration-100 "
            placeholder="Name"
          />
        ) : (
          <></>
        )}
        <input
          type="text"
          className="bg-gray-100  border-2 border-background rounded-full w-[70%] px-5 py-3  my-2 hover:bg-background hover:text-white ease-in duration-100 "
          placeholder="Email"
        />
        <input
          type="text"
          className="bg-gray-100  border-2 border-background rounded-full w-[70%] px-5 py-3  my-2 hover:bg-background hover:text-white ease-in duration-100 "
          placeholder="Password"
        />

        <button
          onClick={() => {
            setNew(!isnew);
          }}
          className="text-background/80 font-thin hover:text-background"
        >
          {isnew ? "I already have an account" : "I am new here"}
        </button>
      </div>
    </div>
  );
}

export default Login;
