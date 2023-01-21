import Header from "@/components/header";
import React from "react";
import Image from "next/image";
function Welcome() {
  return (
    <div className=' bg-[url("/bg2.png")] bg-cover bg-center text-background m-0  h-[100%] w-[100%] overflow-hidden '>
      <div className="grid grid-cols-2 p-4 mt-42 space-x-20 ">
        <div className="col-span-1 my-10 translate-x-36">
          <Image src="/doc-male.png" height={400} width={400} alt="" />
        </div>
        {/* <div className="col-span-1"></div> */}
        <div className="md:col-span-1 md:ml-12 md:mt-44">
          <div className="text-4xl font-bold uppercase mb-6">
            <p>Welcome to</p>
            <p>Modern Clinic</p>
          </div>
          <div className="">
            <p>
              Alivio is more than just a tool. Alivio helps improves quality
            </p>
            <p>of life by giving the providers the freedom they need to</p>
            <p>better take care of their patients.</p>
          </div>
          <button className="bg-background text-white px-5 py-1 rounded-3xl my-6 border-2 border-background hover:bg-transparent hover:text-background  ease-in duration-100">
            Contact Us
          </button>
        </div>
      </div>
      {/*       
      <div className=''>
        <Image src="/Rectangle 5.png" height={500} width={500} alt=""/>
        </div>
        <div className=''>

      <Image src="/doc-female.png" height={300} width={300} alt=""/>
        </div> */}
    </div>
  );
}

export default Welcome;