import Header from "@/components/header";
import React, { useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Link from "next/link";

function Home() {
  // const [open, setOpen] = useState(false);
  return (
    <Element name="home">
      <div className=' bg-[url("/bg.png")] bg-cover bg-center text-white m-0   overflow-hidden'>
          
          <Header />

        <div className="md:grid hidden md:grid-cols-5 p-4 mt-42">
          <div className="col-span-2 ml-12 mt-16 ">
            <div className="text-4xl font-bold uppercase mb-6 font-exo">
              <p>AI-powered Virtual</p>
              <p>Assistant for</p>
              <p>Providers</p>
            </div>
            <div>
              <p>By leveraging technologies such as Machine Learning and</p>
              <p>
                Artificial Intelligence, our solutions help medical providers
              </p>
              <p>save over 30-35% of their time on documentation.</p>
            </div>
            <button className="bg-white text-background px-5 py-1 rounded-3xl my-6 border-2 border-white hover:bg-transparent hover:text-white  ease-in duration-100">
              <Link href="/screens/login">Register</Link>
            </button>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-2 ml-0">
            <Image src="/doc-female.png" height={400} width={400} alt="" />
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1 ml-6 mt-10">
          <div className="text-3xl font-bold uppercase mb-6 font-exo">
            <p>AI-powered Virtual</p>
            <p>Assistant for</p>
            <p>Providers</p>
          </div>
          <div className="text-md">
            <p>By leveraging technologies such as Machine Learning and</p>
            <p>Artificial Intelligence, our solutions help medical providers</p>
            <p>save over 30-35% of their time on documentation.</p>
          </div>
          <button className="md:bg-white w-[15%] py-5 md:text-background text-white md:px-5 md:py-1 rounded-3xl md:my-6 md:border-2 md:border-white hover:bg-transparent hover:text-white  ease-in duration-100">
            <Link href="/screens/login">Register</Link>
          </button>
        </div>
      </div>
    </Element>
  );
}

export default Home;
