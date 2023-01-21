import React from "react";
import Image from "next/image";
function Card({ imagePath, heading, content }) {
  return (
    <div className="bg-white p-4 rounded-xl w-72 m-2 my-32 hover:-translate-y-4  ease-in duration-100">
      <Image src={imagePath} height={400} width={400} alt="" />
      <h1 className="text-background text-32l uppercase py-4 font-semibold">
        {heading}
      </h1>
      <p className="text-background font-thin flex-wrap">{content}</p>
      <button className="text-background text-center p-4 mt-5 border-solid border-2 w-full border-background rounded-full hover:bg-background hover:text-white transition ease-in duration-100">Make an appointment</button>
    </div>
  );
}

export default Card;
