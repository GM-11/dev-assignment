import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

function Footer() {
  return (
    <Element name = "footer">

    <div className=" bg-[url('/footer.png')]">
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-10 text-white">
        <div className="col-span-1  flex-col flex p-16 justify-start">
          <Image src="/alivio.png" height={150} width={150} alt="" />
          <p className="py-3 font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
            egestas turpis aenean tempor pretium vel, morbi enim.
          </p>
        </div>
        <div className="col-span-1 p-16">
          <p className="font-bold mb-5 uppercase">we are available</p>
          <p className="mt-6 font-thin">Monday-Friday: 8:00-10:00</p>
          <p className="mt-6 font-thin">Saturday: 8:00-10:00</p>
          <p className="mt-6 font-thin">Sunday: 8:00-10:00</p>
        </div>
        <div className="col-span-1 p-16">
            <p className = "font-thin">Emergency Medical Number</p>
            <p className = "text-2xl font-semibold">+91-00890023</p>
            <p className = "font-thin">Email</p>
            <p className = "text-2xl font-semibold">+91-00890023</p>
            <p className = "font-thin">Telephone Number</p>
            <p className = "text-2xl font-semibold">+91-00890023</p>
        </div>
      </div>

      <div className="text-center text-white mt-16 py-4 mx-16 border-t-2 border-t-gray-400">
        Designed by Rohit with love
      </div>
    </div>
    </Element>
  );
}

export default Footer;
