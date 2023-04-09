"use client";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/images/airbnb-rival.png"}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
};

export default Logo;
