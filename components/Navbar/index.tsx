import React from "react";
import Search from "./Search";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-16 fixed top-0 z-10 flex justify-between items-center px-6">
      <h2 className="text-2xl font-bold">Logo</h2>
      <Search />
      <div className="w-10 h-10 relative">
        <Image
          className="absolute right-0 top-1 cursor-pointer"
          layout="fill"
          src={"/assets/icons/profile.svg"}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
