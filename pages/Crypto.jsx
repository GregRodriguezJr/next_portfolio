import Image from "next/image";
import React from "react";
import dashboardImg from "../public/assets/dashboard.png";

const Crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40-vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          fill
          src={dashboardImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crypto Dashboard</h2>
          <h3>JavaScript / Coin Gecko API </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Crypto Dashboard is a web application that aggregates over 13,000
            crypto currencies. Designed and implemented front-end and backend
            API capabilities & functionality so users can interact with the
            price chart to see the history of a chosen coin. Users can click
            links inside the table to provide additional information inside a
            modal. Users can search by coin name to display an information card,
            while getting coin name suggestions.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Source Code</button>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
