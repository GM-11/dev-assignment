import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Login() {
  const [isnew, setNew] = useState(true);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="col-span-1 bg-[url('/bg.png')] text-white flex flex-col items-center  pb-0">
        <div className="font-bold uppercase md:text-7xl md:my-3 text-3xl my-4">
          <Link href="/" className="font-thin text-sm ml-2">
            Go back
          </Link>
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

        <div className="md:flex md:translate-y-8  hidden">
          <Image width={350} height={350} src="/doc-male-2.png" alt="" />
        </div>
        <div className="md:hidden">
          <Image width={250} height={250} src="/doc-male-2.png" alt="" />
        </div>
      </div>
      <div className="col-span-1 text-background  flex flex-col items-center my-48">
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
        <button className="text-white my-2 font-thin bg-background rounded-full px-2 py-1 hover:text-background hover:bg-white border-2 border-background ease-in duration-100">
          {isnew ? "Sign Up" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

export default Login;
