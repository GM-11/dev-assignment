import Card from "@/components/card";
import React from "react";

function Care() {
  return (
    <div className='bg-[url("/care.png")] bg-cover'>
      <div className="text-white p-5">
        <h1 className="text-6xl uppercase mt-16 ml-9">Why should you care</h1>

        <div className="flex flex-row justify-around ">
          <Card
            imagePath="/glasses.png"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus egestas turpis aenean tempor pretium vel, morbi enim. Pretium, placerat neque dictum nisl ac a elit, pellentesque."
            heading="documentation"
          />
          <Card
            imagePath="/image3.png"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus egestas turpis aenean tempor pretium vel, morbi enim. Pretium, placerat neque dictum nisl ac a elit, pellentesque."
            heading="diagnosis coading"
          />
          <Card
            imagePath="/doctors-sitting.png"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus egestas turpis aenean tempor pretium vel, morbi enim. Pretium, placerat neque dictum nisl ac a elit, pellentesque."
            heading="diagnosis research"
          />
        </div>

        <button className="w-full mx-15 mb-6 bg-white border-2 border-white text-background rounded-full text-center py-5 hover:bg-transparent hover:text-white transition ease-in duration-100">
          <p className=" text-md uppercase font-bold ">We are here for you</p>
          <p className=" text-3xl uppercase font-bold ">Book a demo</p>
        </button>
      </div>
    </div>
  );
}

export default Care;
