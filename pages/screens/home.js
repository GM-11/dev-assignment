import Header from "@/components/header";
import React, { useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Link from "next/link";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <Element name="home">
      <div className=' bg-[url("/bg.png")] bg-cover bg-center text-white m-0  h-[100%] w-[100%] overflow-hidden'>
        <Header />

        <div className="grid grid-cols-5 p-4 mt-42">
          <div className="col-span-2 ml-12 mt-16 ">
            <div className="text-4xl font-bold uppercase mb-6 font-exo">
              <p>AI-powered Virtual</p>
              <p>Assistant for</p>
              <p>Providers</p>
            </div>
            <div >
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
      </div>
    </Element>
  );
}

export default Home;
